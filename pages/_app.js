import { useState } from 'react'
import { AppContext } from '../AppContext/AppContext'
import Layout from '../Components/Layout/Layout'
import { InMemoryCache, ApolloClient, ApolloProvider,createHttpLink} from '@apollo/client'
import '../styles/globals.css'
import { endpoint } from '../Components/Utilis/BackendApi'
import { useLocaleStorage } from '../Components/Utilis/useLocaleStorage'
import { setContext } from '@apollo/client/link/context'


const httpLink = createHttpLink({
  uri: endpoint+'/graphql',
})
const authLink = setContext((_, { headers }) => {
  
  if (typeof window !== 'undefined') {
    let token = JSON.parse(localStorage.getItem('olympicsjwt'))||''
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  }
  
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  const[discipline,setDiscipline] = useState('athletics')
  const[videos,setVideos] = useState('')
  const [value,setValue] = useLocaleStorage(null,'olympicsjwt')
  const[clickedVideo,setClickedVideo] = useState('')
  const[videoList,setVideoList] = useState('')
  const[userName,setUserName] = useState('')
  const[userEmail,setUserEmail] = useState('')
  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={{discipline,setDiscipline,videos,setVideos,clickedVideo,setClickedVideo,videoList,setVideoList,value,setValue,userName,setUserName,userEmail,setUserEmail}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
    </ApolloProvider>
    
  )
}

export default MyApp
