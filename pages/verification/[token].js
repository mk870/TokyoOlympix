import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext/AppContext'
import Spinner from '../../Components/Spinner/Spinner'
import { VERIFICATION } from '../../Components/Utilis/GraphqlQuery'
import styles from '../../styles/VerificationStyles/Verification.module.css'

const verification = () => {
  const [verificationData,verificationMutation] = useMutation(VERIFICATION,{onError:(error)=>console.log(error)})
  const{setValue} = useContext(AppContext)
  const router = useRouter()
  const token = router.query.token
  const verify = ()=>{
    verificationData({variables:{token: token}})
  }
  useEffect(()=>{
    if(token){
      verify()
    }
  },[token])
  const processResponse = data =>{
    setValue(data.verifyRegistration.jwt)
    return data.verifyRegistration.response
  }
  return (
    <div className={styles.container}>
     <div className={styles.spin}>
     {verificationMutation.data?<h1 className={styles.text}>{processResponse(verificationMutation.data)}</h1>:verificationMutation.error ?<h1 className={styles.error}>An Error occurred</h1>:<Spinner />}
     </div>
      
    </div>
  )
}

export default verification