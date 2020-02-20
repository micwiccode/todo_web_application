import React, { Component } from 'react';
import './css/App.css';
import { Header } from './components/Header';
import List from './components/List';
import {Footer} from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <List/>
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;
