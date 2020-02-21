import React, { Component } from 'react';
import './css/App.css';
import { Header } from './components/Header';
import List from './components/List';
import { Footer } from './components/Footer';
import RegistrationForm  f``rom './components/RegistrationForm';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/logActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          {/*<List />*/}
          <RegistrationForm/>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
