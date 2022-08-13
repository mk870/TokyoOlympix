import React from 'react'
import SelectDiscipline from '../Components/Disciplines/SelectDiscipline'
import styles from '../styles/VideoStyles/CeremonyStyles.module.css'
import  { youtubeKey } from '../Components/Utilis/Youtube'
import axios from 'axios'


const closing = (props) => {
  const cleanSnippet = (snippet) =>{
    return snippet.replace(/(https?|ftp):\/\/[\.[a-zA-Z0-9\/\-]+/,' ')
  }
  return (
    <div className={styles.container} >
      <h1>Closing Ceremony</h1>
        <SelectDiscipline/>
        <div className={styles.video}>
          <div className={styles.embed}>
            <iframe className={styles.iframe} title="videoplayer" src={ `https://www.youtube.com/embed/${props.data.id.videoId}`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
          </div>
          <div className={styles.segment}>
            <h4 className={styles.header}>{cleanSnippet(props.data.snippet.title)}</h4>
            
          </div>
          
        </div>
    </div>
  )
}
export const getStaticProps = async () => {
  const search = 'Closing Ceremony Tokyo2020 Highlights'
  try{

    const result = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${youtubeKey}`);
    const data = result.data;
    return {
        props: {
            data: data.items[0]
        }
    }
  }catch (e) {
    
    return { notFound: true };
  }
  }
export default closing