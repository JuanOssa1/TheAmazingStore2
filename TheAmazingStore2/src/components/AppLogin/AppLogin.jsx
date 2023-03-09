import React from 'react';
import BigInput from '../UI/BigInput/BigInput';
import ButtonBlue from '../UI/ButtonBlue/ButtonBlue';
import HotelCard from '../UI/HotelCard/HotelCard';
import styles from './AppLogin.module.scss'
import { useState } from 'react';

export default function AppLogin() {

  const [userInput, setUserInput] = useState({
    enteredEmail:"",
    enteredPassword:""
  })
  //const [isValid, setIsValid] = useState(true);

  const emailChangeHandler = (event) =>{
    if(event.target.value.trim().lenght>0){
      setIsValid(true);
    }
    setUserInput((prevState)=>{
      return {...prevState, enteredEmail: event.target.value}
    })
    console.log(userInput)
  }
  const passwordChangeHandler = (event) =>{
    if(event.target.value.trim().lenght>0){
      setIsValid(true);
    }
    setUserInput((prevState)=>{
      return {...prevState, enteredPassword: event.target.value}
    })
    console.log(userInput)
  }

  return (
    <div className={`${styles['main-content']}`}>
        <p className={`${styles['main-content__title']}`}>Iniciar Sesión</p>
        <BigInput title="Correo electrónico: " onChange={emailChangeHandler}></BigInput>
        <BigInput title="Contraseña: " type="password" marginTop="15px" onChange={passwordChangeHandler}></BigInput>
        <ButtonBlue text="Ingresar" margin="47px 0 17px 0"></ButtonBlue>
        <p className={`${styles['main-content__register']}`}>¿Aún no tenes cuenta? <a>Registrate</a></p>
    </div>
  );
}
