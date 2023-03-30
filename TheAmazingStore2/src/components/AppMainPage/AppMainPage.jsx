import React from 'react';
import styles from './AppMainPage.module.scss';
import Hotels from '../../db/hotels.json';
import HotelCard from '../UI/HotelCard/HotelCard';
import HotelAdditionalInfo from '../UI/HotelAdditionalInfo/HotelAdditionalInfo';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import FormTitle from '../UI/FormTitle/FormTitle';
import Stepper from '../UI/Stepper/Stepper';
import { collection, addDoc, getDocs, where, query } from 'firebase/firestore';
import * as firebase from '../../db/firebaseHotels';
import { useState, useEffect } from 'react';
import LoadingScreen from '../UI/LoadingScreen/LoadingScreen';
export default function AppMainPage({ searchState }) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredDescription: '',
    enteredUrl: '',
    enteredStars: 0,
    validTitle: true,
    validDescription: true,
    validUrl: true,
  });
  const [loaded, setLoaded] = useState(undefined);
  const [hotels, setHotels] = useState([]);
  const [modalInfoState, setModalInfoState] = useState({
    modalIsActivated: false,
    valueToShow: '',
  });

  const showInfoModal = () => {
    setModalInfoState((prevState) => {
      return { ...prevState, modalIsActivated: true };
    });
  };
  const hideInfoModal = () => {
    setModalInfoState((prevState) => {
      return { ...prevState, modalIsActivated: false };
    });
  };
  const modalChangeInfoHandler = (value) => {
    setModalInfoState((prevState) => {
      return { ...prevState, valueToShow: value };
    });
  };

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
    let hotels = collection(firebase.db, 'hotels');
    if (searchState) {
      hotels = query(
        collection(firebase.db, 'hotels'),
        where('title', '>=', searchState),
        where('title', '<=', searchState + '\uf8ff')
      );
    }
    const querySnapshot = await getDocs(hotels);
    const hotelList = querySnapshot.docs.map((doc) => doc.data());
    setHotels(hotelList);
    setLoaded(true);
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
      getFirebaseHotels();
    }
  };
  useEffect(() => {
    getFirebaseHotels();
  }, [searchState]);

  const onDeleteHotel = (idToRemove) => {
    const updatedHotels = hotels.filter((hotel) => idToRemove !== hotel.id);
    console.log({ updatedHotels });
    setHotels(updatedHotels);
  };
  const showAdditionalInfo = (info) => {
    modalChangeInfoHandler(info);
    showInfoModal();
  };

  return (
    <>
      {!loaded && <LoadingScreen />}
      {modalInfoState.modalIsActivated && (
        <HotelAdditionalInfo
          onClose={hideInfoModal}
          info={modalInfoState.valueToShow}
        />
      )}
      <section className={`${styles['main-page']}`}>
        <span className={`${styles['main-page__info']}`}>
          {hotels.map((item, index) => (
            <HotelCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              stars={item.enteredStars}
              onClick={() => showAdditionalInfo(item.id)}
            />
          ))}
        </span>
        <form
          className={styles['main-page__form']}
          onSubmit={formSubmitHandler}
        >
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
          <Button
            className={`${styles['button-submit']}`}
            text="Agregar"
            type="submit"
          />
        </form>
      </section>
    </>
  );
}
//Que es iterable y que es enumerable
