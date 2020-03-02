import React, { Component } from 'react';
import '../css/addTask.css';
import PropTypes from 'prop-types';

export class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', error: false };
    this.onTaskNameChange = this.onTaskNameChange.bind(this);
    this.onSubmitTaskName = this.onSubmitTaskName.bind(this);
  }

  render() {
    const error = this.state.error
      ? { visibility: 'visible' }
      : { visibility: 'hidden' };
    return (
      <div className="add_task">
        <form className="add_task__form" onSubmit={this.onSubmitTaskName}>
          <input
            className="add_task__form__input"
            type="text"
            name="task_name"
            placeholder="Type new task..."
            value={this.state.name}
            onChange={this.onTaskNameChange}
          />
          <input type="submit" value="+" className="add_task__form__btn" />
        </form>
        <p className="add_task__error" style={error}>
          Please enter a name of task!
        </p>
      </div>
    );
  }

  onTaskNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onSubmitTaskName(event) {
    event.preventDefault();
    const {name} = this.state;
    if (name !== '') {
      this.props.addTask(name);
      this.setState({ name: '', error: false });
    } else {
      this.setState({ error: true });
    }
  }
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};
