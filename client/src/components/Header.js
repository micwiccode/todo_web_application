import React from 'react';
import '../css/header.css';
const icon = require('../img/icon.png');

export function Header() {
  return (
    <div className="header">
      <div className="header__box">
        <img className="header__box__icon" src={icon} alt="logo" />
        <h1 className="header__box__title">Try not to forget</h1>
        <h4 className="header__box__subtitle">
          With this app you will never forget about the most important things
        </h4>
      </div>
      <nav className="header__nav">
        <button className="header__nav__btn">Sign up</button>
      {/*<button className="header__nav__list__item">Log in</button>*/}
      </nav>
    </div>
  );
}
