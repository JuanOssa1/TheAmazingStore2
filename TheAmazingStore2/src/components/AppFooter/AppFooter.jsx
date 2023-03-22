import React from 'react';
import styles from './AppFooter.module.scss';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import '../../constants/consts.scss';

export default function AppFooter() {
  // arreglar constantes
  const iconStyle = {
    iconStyle: { width: '28px', height: '27px', color: 'white' },
  };
  return (
    <div className={`${styles['app-footer']}`}>
      <p className={`${styles['app-footer__rights']}`}>©2021 Digital Booking</p>
      <div className={`${styles['app-footer__social']}`}>
        <BsFacebook style={{ width: '28px', height: '27px', color: 'white' }} />
        <ImLinkedin2 style={iconStyle.iconStyle} />
        <BsTwitter style={iconStyle.iconStyle} />
        <BsInstagram style={iconStyle.iconStyle} />
      </div>
    </div>
  );
}
