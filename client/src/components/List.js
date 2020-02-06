import React, { Component } from 'react';
import { ListItem } from './ListItem';
import '../list.css';
import { AddTask } from './AddTask';

export class List extends Component {
  render() {
    return (
      <div className="list">
        <AddTask addTask={this.props.addTask}/>
        {this.props.tasks.map(task => (
          <ListItem key={task.id} task={task} makeTaskDone = {this.props.makeTaskDone} deleteTask = {this.props.deleteTask}/>
        ))}
      </div>
    );
  }
}
