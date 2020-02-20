import React from 'react';
import '../css/header.css';
const icon = require('../img/icon.png');

export function Header() {
  return (
    <div className="header">
      <img className="header__icon" src={icon} alt="logo" />
      <h1 className="header__title">Try not to forget</h1>
      <h4 className="header__subtitle">
        With this app you will never forget about the most important things
      </h4>
    </div>
  );
}
