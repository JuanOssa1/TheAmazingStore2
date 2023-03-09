import React from 'react';
import BigInput from '../UI/BigInput/BigInput';
import ButtonBlue from '../UI/ButtonBlue/ButtonBlue';
import FormTitle from '../UI/FormTitle/FormTitle';
import styles from './AppLogin.module.scss'
import { useState } from 'react';

export default function AppLogin(props) {
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const [userInput, setUserInput] = useState({
    enteredEmail:"",
    enteredPassword:"",
    validEmail: true,
    validPassword: true
  })
  const validateEmail = (currentValue) =>{
    if(currentValue.length>0){
      if(currentValue.includes("@")){
        setUserInput(()=>{
          return {validEmail: true}
        })
      }
    }
  }
  const validatePassword = (currentValue) =>{
    if(currentValue.length>8){
      if(specialCharacters.test(currentValue)){
        setUserInput(()=>{
          return {validPassword: true}
        })
      }
    }
  }
  const validateLogin = () => {
    if(userInput.validEmail && userInput.validPassword){
      props.setValid(true);
    }
  }
  const emailChangeHandler = (event) =>{
    //let value1 = userInput.enteredEmail.trim() //Hacen lo mismo?
    let value2 = event.target.value.trim()
    validateEmail(value2)
    setUserInput((prevState)=>{
      return {...prevState, enteredEmail: event.target.value}
    })
  }
  const passwordChangeHandler = (event) =>{
    //let value1 = userInput.enteredPassword.trim() //Hacen lo mismo?
    let value2 = event.target.value.trim()
    validatePassword(value2)
    setUserInput((prevState)=>{
      return {...prevState, enteredPassword: event.target.value}
    })
  }
  const formSubmitHandler = (event) =>{
    event.preventDefault();
    console.log(userInput.enteredEmail, userInput.enteredPassword)
    validateLogin();
    console.log(userInput.validEmail, userInput.validPassword)
  }

  return (
    <form className={`${styles['main-content']}`} onSubmit={formSubmitHandler}>
        <FormTitle text="Iniciar Sesión"></FormTitle>
        <BigInput title="Correo electrónico: " onChange={emailChangeHandler} validInput={userInput.validEmail}></BigInput>
        <BigInput title="Contraseña: " type="password" marginTop="15px" onChange={passwordChangeHandler} validInput={userInput.validPassword}></BigInput>
        <ButtonBlue text="Ingresar" margin="47px 0 17px 0" ></ButtonBlue>
        <p className={`${styles['main-content__register']}`}>¿Aún no tenes cuenta? <a>Registrate</a></p>
    </form>
  );
}
