import React from 'react';
import '../css/header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const icon = require('../img/icon.png');

function Header({ isAuth }) {
  return (
    <div className="header">
      <div className="header__box">
        <Link to="/">
          <img className="header__box__icon" src={icon} alt="logo" />
        </Link>
        <h1 className="header__box__title">Try not to forget</h1>
        <h4 className="header__box__subtitle">
          With this app you will never forget about the most important things
        </h4>
      </div>
      <nav className="header__nav">
        {isAuth ? (
          <Link to="/">
            <button className="header__nav__btn">Log out</button>
          </Link>
        ) : (
          <>
            <Link to="/signup">
              <button className="header__nav__btn">Sign up</button>
            </Link>
            <Link to="/login">
              <button className="header__nav__btn">Log in</button>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

Header.propsTypes = {
  isAuth: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuth: state.logRoot.isAuth,
});

export default connect(mapStateToProps)(Header);
