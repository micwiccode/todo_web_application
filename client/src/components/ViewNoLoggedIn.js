import React from 'react';
import { Link } from 'react-router-dom';
import '../css/registrationForm.css';

const ViewNoLoggedIn = () => {
  return (
    <div className="form">
      <h3 className="form__info">First log in or sign up to use app</h3>
      <div>
        <Link to="/login">
          <button className="form__input form__btn">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="form__input form__btn">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewNoLoggedIn;
