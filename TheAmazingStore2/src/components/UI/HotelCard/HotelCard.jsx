import React from 'react'
import ButtonBlue from '../ButtonBlue/ButtonBlue'
import {AiFillStar, AiOutlineWifi} from "react-icons/ai"
import {GoLocation} from 'react-icons/go'
import {TbSwimming} from 'react-icons/tb'
//import styles from './HotelCard.module.scss'
import './HotelCard.module.scss'

export default function HotelCard() {
  return (
    <section className='hotel-card'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max500/359985903.jpg?k=d279753b694d94521eefe3ae7d1869de095a1cd9dd5fd8864b15c77fcd4adb12&o=&hp=1" alt="No cargo" className='hotel-card__image'/>
        <section className='hotel-card__info'>
            <span className='info-general'>
                <p className='info-general__stars'>HOTEL <AiFillStar/></p>
                <h1 className='info-general__title'>Hermitage Hotel</h1>   
            </span>
            <span className='info-score'>
                <p className='info-score__value'>8</p>
                <p className='info-score__text'>Muy bueno</p>
            </span>
        </section>
        <section className='hotel-card__specs'>
            <span className='hotel-location'>
                <GoLocation/>
                <p className='hotel-location__description'>A 940 m del centro <a>MOSTRAR EN EL MAPA</a></p>
            </span>
            <span className='hotel-highlights'>
                <AiOutlineWifi/>
                <TbSwimming/>
            </span>
        </section>
        <p className='hotel-card__description'>En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires.<a>más...</a></p>
        <ButtonBlue text="ver mas" width="296px"/>
    </section>
  )
}
