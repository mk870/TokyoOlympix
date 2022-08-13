import React, { useContext, useEffect, useState } from 'react'
import { LoginForm } from '../Components/FormContent/FormContent'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '../styles/LoginStyles/Login.module.css'
import { LOGIN } from '../Components/Utilis/GraphqlQuery';
import { useMutation } from '@apollo/client';
import { AppContext } from '../AppContext/AppContext';
import Popup from '../Components/Popups/Popup';


const schema = yup
  .object()
  .shape({
    
    email: yup.string().email().required(),
    password: yup.string().required().min(4)
  })
  .required();

const login = () => {
  const {register,reset,handleSubmit,formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  })
  const [popup,setPopup] = useState('')
  const {setValue} = useContext(AppContext)
  const {value} = useContext(AppContext)
  const [loginData,loginMutation] = useMutation(LOGIN,{onError:(error)=>console.log(error)})
  const submit = (userData)=>{
    if(value) setValue(null)
    else{
    loginData({variables: {loginDTO:{
      email: userData.email,
      password: userData.password
    }}})
    reset()
    }
  }
  
  useEffect(()=>{
    if(loginMutation.data){
      setValue(loginMutation.data.userLogin.jwt)
      setPopup(loginMutation.data.userLogin.response)
    }
    if(loginMutation.error){
      setPopup("An error occurred")
    }
  },[loginMutation.data,loginMutation.error])
  return (
    <div className={styles.container}>
      {popup && <Popup info={popup} clear={setPopup}/>}
      <div className={styles.card}>
      <div className={styles.header}>
        <h2>Please fill In Your Details</h2>
      </div>
          <form className={styles.form} onSubmit={handleSubmit(submit)}>
          {LoginForm.inputs.map((input,key) =>(
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
              
              {loginMutation.loading?'Loading...':value?'Logout':'Login'}
            </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default login