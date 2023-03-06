import React from 'react'
import styles from './AppFooter.module.scss'
import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"
import {ImLinkedin2} from "react-icons/im"

export default function AppFooter() {
  return (
    <div className={`${styles['app-footer']}`}>
        <p className={`${styles['app-footer__rights']}`}>©2021 Digital Booking</p>
        <div className={`${styles['app-footer__social']}`}>
            <BsFacebook/>
            <ImLinkedin2/>
            <BsTwitter/>
            <BsInstagram/>
        </div>
    </div>
  )
}
