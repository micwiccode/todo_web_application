import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../css/registrationForm.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logIn } from '../actions/logActions';
import caution from '../img/caution.png';

class LogInForm extends Component {
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

  componentDidUpdate(prevProps) {
    const { error, isAuth, history } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'LOGIN_FAIL') {
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
    const { isAuth } = this.props;
    return isAuth ? (
      <Redirect to="/" />
    ) : (
      <form className="form" onSubmit={this.onLogIn}>
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
        {this.state.errorMessage ? (
          <div id="caution">
            <img src={caution} alt="caution" />
            <p>{this.state.errorMessage}</p>
          </div>
        ) : null}
        <input className="form__input form__btn" type="submit" value="Log in" />
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

  onLogIn = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    this.setState({ email: '', password: '' });
    this.props.logIn(user);
  };
}

LogInForm.propsTypes = {
  isAuth: PropTypes.bool,
  error: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuth: state.logRoot.isAuth,
  error: state.errorRoot,
});

export default connect(mapStateToProps, { logIn })(LogInForm);
