import React from 'react';
import Modal from '../Modal/Modal';
import { useContext } from 'react';
import LogContext from '../../../context/log-context';
import Button from '../Button/Button';
import styles from './HotelAdditionalInfo.module.scss';

function HotelAdditionalInfo({ onClose }) {
  const logCtx = useContext(LogContext);
  return (
    <Modal onClose={onClose}>
      <h1>{logCtx.user}</h1>
      <Button
        className={`${styles['card-button']}`}
        text="ver mas"
        //onClick={props.onClick}
      />
    </Modal>
  );
}

export default HotelAdditionalInfo;
