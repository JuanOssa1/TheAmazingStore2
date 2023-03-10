import React from 'react';
import styles from './AppFooter.module.scss';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import '../../constants/consts.scss';

export default function AppFooter() {
  // arreglar constantes
  return (
    <div className={`${styles['app-footer']}`}>
      <p className={`${styles['app-footer__rights']}`}>©2021 Digital Booking</p>
      <div className={`${styles['app-footer__social']}`}>
        <BsFacebook style={{ width: '28px', height: '27px', color: 'white' }} />
        <ImLinkedin2
          style={{ width: '28px', height: '27px', color: 'white' }}
        />
        <BsTwitter style={{ width: '28px', height: '27px', color: 'white' }} />
        <BsInstagram
          style={{ width: '28px', height: '27px', color: 'white' }}
        />
      </div>
    </div>
  );
}
