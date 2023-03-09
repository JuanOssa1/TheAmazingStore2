import React from 'react'
import styles from './AppMainPage.module.scss'
import Hotels from '../../db/hotels.json' 
import HotelCard from '../UI/HotelCard/HotelCard'

export default function AppMainPage() {
  return (
    <section className={`${styles['main-page']}`}>
        {
            Hotels.hotels.map((item)=>(
                <HotelCard key={item.id} title={item.title} description={item.description} image={item.image}/>
            ))
        }
    </section>
  )
}
