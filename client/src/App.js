import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import List from './components/List';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <List/>
        </div>
      </Provider>
    );
  }
}

export default App;
