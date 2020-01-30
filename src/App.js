import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { List } from './components/List';

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        isDone: true,
        name: 'Shopping',
      },
      {
        id: 2,
        isDone: false,
        name: 'Cinema',
      },
    ],
  };

  makeTaskDone = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) task.isDone = !task.isDone;
        return task;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <List tasks={this.state.tasks} makeTaskDone={this.makeTaskDone} />
      </div>
    );
  }
}

export default App;
