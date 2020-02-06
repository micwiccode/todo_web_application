import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { List } from './components/List';
import uuid from 'uuid';

class App extends Component {
  state = {
    tasks: [
      {
        id: uuid(),
        isDone: false,
        name: 'Shopping',
      },
      {
        id: uuid(),
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

  addTask = taskName => {
    const newTask = { id: uuid(), isDone: false, name: taskName };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  deleteTask = id => {
    this.setState({
      tasks: [...this.state.tasks.filter(task => task.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <List
          tasks={this.state.tasks}
          makeTaskDone={this.makeTaskDone}
          deleteTask={this.deleteTask}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
