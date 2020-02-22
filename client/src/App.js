import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import List from './components/List';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import { Provider } from 'react-redux';
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
        <Provider store={store}>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                <List />
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
        </Provider>
      </Router>
    );
  }
}

export default App;
