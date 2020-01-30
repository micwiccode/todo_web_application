import React, { Component } from 'react';
import '../AddTask.css'

export class AddTask extends Component {
  render() {
    return (
      <div className="add_task">
        <input className="add_task__input" type="text" placeholder="Type new task..." />
        <button className="add_task__btn">+</button>
      </div>
    );
  }
}
