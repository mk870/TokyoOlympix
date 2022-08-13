import React, { useContext, useEffect, useState } from 'react'
import { SignupForm } from '../Components/FormContent/FormContent'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '../styles/LoginStyles/Login.module.css'
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../Components/Utilis/GraphqlQuery';
import Popup from '../Components/Popups/Popup';
import { AppContext } from '../AppContext/AppContext';


const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(4)
  })
  .required();
  
  const Signup = () => {
  const [popup,setPopup] = useState('')
  const{value} = useContext(AppContext)
  const{setValue} = useContext(AppContext)
  const {register,reset,handleSubmit,formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  })
  const [signUpData,signUpMutation] = useMutation(SIGNUP,{onError:(error)=>console.log(error)})
  const submit = (userData)=>{
    if(value) setValue(null)
    else{
    signUpData({variables: {userDTO:{
      firstName : userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password
    }}})
    reset()
    }
  }
  useEffect(()=>{
    if(signUpMutation.data){
      setPopup(signUpMutation.data.saveUser)
    }
    if(signUpMutation.error){
      setPopup("An error occurred")
    }
  },[signUpMutation.data,signUpMutation.error])
  
  return (
    <div className={styles.container}>
      {popup && <Popup info={popup} clear={setPopup}/>}
      <div className={styles.card}>
      <div className={styles.header}>
        <h2>Please fill In Your Details</h2>
      </div>
          <form className={styles.form} onSubmit={handleSubmit(submit)}>
          {SignupForm.inputs.map((input,key) =>(
              <div className={styles.wrapper} key={key}>
                <label htmlFor={input.name}>{input.label}</label>
                <input 
                  placeholder={`please enter your ${input.name}`}
                  type={input.type}
                  {...register(input.name, { required: true })}
                  />
                <p>{errors[input.name]?.message}</p>
              </div>
            ))}
            <div className={styles.submit}>
            <button className={styles.btn} type='submit'>
              {signUpMutation.loading?'Loading...':value?'Sign Out':'Sign Up'}
            </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Signup