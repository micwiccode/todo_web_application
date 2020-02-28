import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import List from './components/List';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import ViewNoLoggedIn from './components/ViewNoLoggedIn';
import RegistrationForm from './components/RegistrationForm';
import {connect, Provider} from 'react-redux';
import store from './store';
import { loadUser } from './actions/logActions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (

      <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                {this.props.isAuth ? <List /> : <ViewNoLoggedIn/>}
              </Route>
              <Route path="/signup">
                <RegistrationForm />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>
            </Switch>
            <Footer />
          </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.logRoot.isAuth,
});

export default connect(mapStateToProps)(App);
