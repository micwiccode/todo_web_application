import React, { Component } from 'react';
import '../AddTask.css';

export class AddTask extends Component {
  state = {
    name: ''
  };

  onTaskNameChange = e => this.setState({ name: e.target.value });

  onSubmitTaskName = e => {
    e.preventDefault();
    this.props.addTask(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
        <form className="add_task" onSubmit={this.onSubmitTaskName}>
          <input
            className="add_task__input"
            type="text"
            name="task_name"
            placeholder="Type new task..."
            value={this.state.name}
            onChange={this.onTaskNameChange}
          />
          <input
            type="submit"
            value="+"
            className="add_task__btn"
          />
        </form>

    );
  }
}
