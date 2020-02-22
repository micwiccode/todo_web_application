import React, { Component } from 'react';
import '../css/registrationForm.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/logActions';
import caution from '../img/caution.png';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   const {error} = this.props;
  //   if (error !== prevProps.error) {
  //     if (error.id === 'REGISTER_FAIL') {
  //       this.setState({
  //         errorMessage: error.message,
  //       });
  //     } else {
  //       this.setState({
  //         errorMessage: null,
  //       });
  //     }
  //   }
  // }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmitUser}>
        <input
          onChange={this.onEmailChange}
          value={this.state.email}
          name="email"
          className="form__input"
          type="text"
          placeholder="E-mail"
        />
        <input
          onChange={this.onPasswordChange}
          value={this.state.password}
          name="password"
          className="form__input"
          type="password"
          placeholder="Password"
        />
        {/*{this.state.errorMessage ?*/}
        {/*  <div id='caution'><img src={caution} alt="caution"/><p>{this.state.errorMessage}</p></div> : null}*/}
        <input
          className="form__input form__btn"
          type="submit"
          value="Log in"
        />
      </form>
    );
  }

  onEmailChange = event => {
    this.setState({
      email: event.target.value,
    });
  };

  onPasswordChange = event => {
    this.setState({
      password: event.target.value,
    });
  };

}

export default LogIn;