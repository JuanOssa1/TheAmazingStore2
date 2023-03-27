import React from 'react';
import styles from './AppMainPage.module.scss';
import Hotels from '../../db/hotels.json';
import HotelCard from '../UI/HotelCard/HotelCard';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import FormTitle from '../UI/FormTitle/FormTitle';
import Stepper from '../UI/Stepper/Stepper';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import * as firebase from '../../db/firebaseHotels';
import { useState, useEffect } from 'react';
export default function AppMainPage() {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredDescription: '',
    enteredUrl: '',
    enteredStars: 0,
    validTitle: true,
    validDescription: true,
    validUrl: true,
  });
  const [hotels, setHotels] = useState([]);

  const validateTitle = (currentValue) => {
    if (currentValue.length === 0) {
      setUserInput((prevState) => {
        return { ...prevState, validTitle: false };
      });
    } else {
      setUserInput((prevState) => {
        return { ...prevState, validTitle: true };
      });
    }
  };
  const validateDescription = (currentValue) => {
    if (currentValue.length === 0) {
      setUserInput((prevState) => {
        return { ...prevState, validDescription: false };
      });
    } else {
      setUserInput((prevState) => {
        return { ...prevState, validDescription: true };
      });
    }
  };
  const validateUrl = (currentValue) => {
    if (currentValue.length === 0) {
      setUserInput((prevState) => {
        return { ...prevState, validUrl: false };
      });
    } else {
      setUserInput((prevState) => {
        return { ...prevState, validUrl: true };
      });
    }
  };

  const titleChangeHandler = (event) => {
    let value2 = event.target.value.trim();
    validateTitle(value2);
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const descriptionChangeHandler = (event) => {
    let value2 = event.target.value.trim();
    validateDescription(value2);
    setUserInput((prevState) => {
      return { ...prevState, enteredDescription: event.target.value };
    });
  };
  const urlChangeHandler = (event) => {
    let value2 = event.target.value.trim();
    validateUrl(value2);
    setUserInput((prevState) => {
      return { ...prevState, enteredUrl: event.target.value };
    });
  };
  const changeStarsHandler = (value) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredStars: value };
    });
  };

  const getFirebaseHotels = async () => {
    const querySnapshot = await getDocs(collection(firebase.db, 'hotels'));
    const hotelList = querySnapshot.docs.map((doc) => doc.data());
    setHotels(hotelList);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (validateTitle && validateDescription && validateUrl) {
      const newHotel = {
        id: Math.random(),
        title: userInput.enteredTitle,
        description: userInput.enteredDescription,
        image: userInput.enteredUrl,
        enteredStars: userInput.enteredStars,
      };
      try {
        const docRef = await addDoc(
          collection(firebase.db, 'hotels'),
          newHotel
        );
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
      //setHotels((prevState) => [...prevState, newHotel]);
      getFirebaseHotels();
    }
  };
  //getFirebaseHotels();
  useEffect(() => {
    getFirebaseHotels();
  }, []);

  const onDeleteHotel = (idToRemove) => {
    const updatedHotels = hotels.filter((hotel) => idToRemove !== hotel.id);
    console.log({ updatedHotels });
    setHotels(updatedHotels);
  };
  return (
    <section className={`${styles['main-page']}`}>
      <span className={`${styles['main-page__info']}`}>
        {hotels.map((item, index) => (
          <HotelCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            stars={item.enteredStars}
            onClick={() => onDeleteHotel(item.id)}
          />
        ))}
      </span>
      <form className={styles['main-page__form']} onSubmit={formSubmitHandler}>
        <FormTitle text="Agregar Hoteles" />
        <Input
          title="Titulo:"
          onChange={titleChangeHandler}
          validInput={userInput.validTitle}
        />
        <Input
          title="Descripción"
          onChange={descriptionChangeHandler}
          validInput={userInput.validDescription}
        />
        <Input
          title="Image Url"
          onChange={urlChangeHandler}
          validInput={userInput.validUrl}
        />
        <Stepper onChange={changeStarsHandler} />
        <Button className={`${styles['button-submit']}`} text="Agregar" />
      </form>
    </section>
  );
}
//Que es iterable y que es enumerable
