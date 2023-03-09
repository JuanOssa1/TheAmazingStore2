import React from 'react';
import styles from './AppMainPage.module.scss';
import Hotels from '../../db/hotels.json';
import HotelCard from '../UI/HotelCard/HotelCard';
import ButtonBlue from '../UI/ButtonBlue/ButtonBlue';
import BigInput from '../UI/BigInput/BigInput';
import FormTitle from '../UI/FormTitle/FormTitle';
import { useState } from 'react';
export default function AppMainPage() {
  const [userInput, setUserInput] = useState({
    enteredTitle:"",
    enteredDescription:"",
    enteredUrl: "",
    validInput: true
  })
  const validateInput = (currentValue) =>{
    if(currentValue.length===0){
      setUserInput(()=>{
        return {validInput: false}
      })
    }

  }
  const titleChangeHandler = (event) =>{
    //let value1 = userInput.enteredEmail.trim() //Hacen lo mismo?
    let value2 = event.target.value.trim()
    validateEmail(value2)
    setUserInput(()=>{
      return {enteredTitle: event.target.value}
    })
  }
  const descriptionChangeHandler = (event) =>{
    //let value1 = userInput.enteredPassword.trim() //Hacen lo mismo?
    let value2 = event.target.value.trim()
    validatePassword(value2)
    setUserInput(()=>{
      return {enteredDescription: event.target.value}
    })
  }
  const urlChangeHandler = (event) =>{
    //let value1 = userInput.enteredPassword.trim() //Hacen lo mismo?
    let value2 = event.target.value.trim()
    validatePassword(value2)
    setUserInput(()=>{
      return {enteredUrl: event.target.value}
    })
  }
  const formSubmitHandler = (event) =>{
    event.preventDefault();
    if(userInput.validInput){
      //Deberia crear un objeto o en este caso asi esta bien?
      const newHotel = {
        id: Math.random(),
        title: userInput.enteredTitle,
        description: userInput.enteredDescription,
        image: userInput.enteredUrl
      }

    }
    console.log(userInput.enteredEmail, userInput.enteredPassword)
    validateLogin();
    console.log(userInput.validEmail, userInput.validPassword)
  }
  return (
    <section className={`${styles['main-page']}`}>
      <span className="main-page__info">
        {Hotels.hotels.map((item) => (
          <HotelCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </span>
      <span className={`${styles['main-page__form']}`}>
        <form className={`${styles['main-form']}`}>
          <FormTitle text="Agregar Hoteles"/>
          {/**Aqui debria mandarle margn o no o el componente deberia ser tal como es sin padding ni nada?*/}
          <BigInput title='Titulo:'/>
          <BigInput title='Descripción' marginTop='15px'/>
          <BigInput title='Image Url' marginTop='15px'/>
          <ButtonBlue text="Agregar" margin="47px 0 17px 0" />
        </form>
      </span>
    </section>
  );
}
