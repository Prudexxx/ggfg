import React from 'react';
import './telefon.css';
import tel from './pngwing.com.png'

const PhoneIcon = () => {
  return (
    <div className="phone-icon">
      <a href="tel:+1234567890">
        <img src= {tel} alt="Phone Icon" />
      </a>
    </div>
  );
};

export default PhoneIcon;
