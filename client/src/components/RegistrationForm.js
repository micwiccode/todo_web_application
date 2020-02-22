import React, { Component } from 'react';
import '../css/registrationForm.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/logActions';
import caution from '../img/caution.png';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      errorMessage: null,
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPasswordRepeatChange = this.onPasswordRepeatChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'REGISTER_FAIL') {
        this.setState({
          errorMessage: error.message,
        });
      } else {
        this.setState({
          errorMessage: null,
        });
      }
    }
  }

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
        />
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
        <input
          onChange={this.onPasswordRepeatChange}
          value={this.state.repeatPassword}
          name="repeatPassword"
          className="form__input"
          type="password"
          placeholder="Repeat password"
        />
        {this.state.errorMessage ? <div id='caution'><img src={caution} alt="caution"/><p>{this.state.errorMessage}</p></div> : null}
        <input
          className="form__input form__btn"
          type="submit"
          value="Sign up"
        />
      </form>
    );
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
      repeatPassword,
    };
    this.props.registerUser(user);
    // this.setState({
    //   name: '',
    //   email: '',
    //   password: '',
    //   repeatPassword: '',
    // });
  };
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
