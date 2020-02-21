import React, { Component } from 'react';
import '../css/registrationForm.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/logActions';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPasswordRepeatChange = this.onPasswordRepeatChange.bind(this);
  }

  onNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

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

  onPasswordRepeatChange = event => {
    this.setState({
      repeatPassword: event.target.value,
    });
  };

  onSubmitUser = event => {
    event.preventDefault();
    const { name, email, password, repeatPassword } = this.state;
    const user = {
      name,
      email,
      password,
    };
    this.props.registerUser(user);
    this.setState({
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmitUser}>
        <input
          onChange={this.onNameChange}
          value={this.state.name}
          name="name"
          className="form__input"
          type="text"
          placeholder="Name"
          required
        />
        <input
          onChange={this.onEmailChange}
          value={this.state.email}
          name="email"
          className="form__input"
          type="text"
          placeholder="E-mail"
          required
        />
        <input
          onChange={this.onPasswordChange}
          value={this.state.password}
          name="password"
          className="form__input"
          type="text"
          placeholder="Password"
          required
        />
        <input
          onChange={this.onPasswordRepeatChange}
          value={this.state.repeatPassword}
          name="repeatPassword"
          className="form__input"
          type="text"
          placeholder="Repeat password"
          required
        />
        <input
          className="form__input form__btn"
          type="submit"
          value="Sign up"
        />
      </form>
    );
  }
}

RegistrationForm.propsTypes = {
  isAuth: PropTypes.bool,
  error: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuth: state.logRoot.isAuth,
  error: state.errorRoot,
});

export default connect(mapStateToProps, {
  registerUser,
})(RegistrationForm);
