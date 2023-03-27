import React from 'react';
import Button from '../Button/Button';
import { AiFillStar, AiOutlineWifi } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { TbSwimming } from 'react-icons/tb';
import styles from './HotelCard.module.scss';

export default function HotelCard(props) {
  const renderStars = (quantity) => {
    const stars = [];
    for (let i = 0; i < quantity; i++) {
      stars.push(<AiFillStar style={{ color: '#1dbeb4' }} />);
    }
    return stars;
  };

  return (
    <section className={`${styles['hotel-card']}`}>
      <img
        src={props.image}
        alt="No cargo"
        className={`${styles['hotel-card__image']}`}
      />
      <section className={`${styles['info-wrapper']}`}>
        <section className={`${styles['hotel-card__info']}`}>
          <span className={`${styles['info-general']}`}>
            <p className={`${styles['info-general__stars']}`}>
              HOTEL {renderStars(props.stars)}
            </p>
            <h1 className={`${styles['info-general__title']}`}>
              {props.title}
            </h1>
          </span>
          <span className={`${styles['info-score']}`}>
            <p className={`${styles['info-score__value']}`}>8</p>
            <p className={`${styles['info-score__text']}`}>Muy bueno</p>
          </span>
        </section>
        <section className={`${styles['hotel-location']}`}>
          <GoLocation style={{ width: '10px', height: '14px' }} />
          <p className={`${styles['hotel-location__description']}`}>
            A 940 m del centro <a>MOSTRAR EN EL MAPA</a>
          </p>
        </section>
        <section className={`${styles['hotel-highlights']}`}>
          <AiOutlineWifi style={{ width: '20px', height: '20px' }} />
          <TbSwimming style={{ width: '28px', height: '28px' }} />
        </section>
        <p className={`${styles['hotel-card__description']}`}>
          {props.description}
          <a> más...</a>
        </p>
        <Button
          className={`${styles['card-button']}`}
          text="ver mas"
          onClick={props.onClick}
        />
      </section>
    </section>
  );
}
