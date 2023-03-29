import React from 'react';
import styles from './AppHeader.module.scss';
import LogContext from '../../context/log-context';
import FormTitle from '../UI/FormTitle/FormTitle';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { useContext } from 'react';

export default function AppHeader({ setSearchState }) {
  const logCtx = useContext(LogContext);
  const searchChangeHandler = (event) => {
    setSearchState(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setSearchState();
  };

  return (
    <div className={`${styles['main-nav']}`}>
      <div className={`${styles['main-nav__left']}`} />
      <div className={`${styles['main-nav__right']}`}>
        {!logCtx.isValid && (
          <Button
            text="Crear cuenta"
            className={`${styles['main-nav__button']}`}
            variant1
          />
        )}
        {logCtx.isValid && (
          <form
            className={`${styles['main-nav__right']}`}
            onSubmit={formSubmitHandler}
          >
            <FormTitle text="Buscar hoteles" />
            <Input
              validInput={true}
              className={`${styles['main-nav__input']}`}
              onChange={searchChangeHandler}
            />
          </form>
        )}
      </div>
    </div>
  );
}
