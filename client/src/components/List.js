import React, { Component } from 'react';
import { ListItem } from './ListItem';
import '../list.css';
import { AddTask } from './AddTask';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getTasks,
  addTask,
  deleteTask,
  toggleTask,
} from '../actions/taskActions';

class List extends Component {
  constructor(props) {
    super(props);
    this.makeTaskDone = this.makeTaskDone.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {
    this.props.getTasks();
  }

  makeTaskDone = id => {
    this.props.toggleTask(id);
  };

  addTask = newTask => {
    this.props.addTask(newTask);
  };

  deleteTask = id => {
    this.props.deleteTask(id);
  };

  render() {
    const { tasks } = this.props.task;
    return (
      <div className="list">
        <AddTask addTask={this.addTask} />
        {tasks.map(task => (
          <ListItem
            key={task._id}
            task={task}
            makeTaskDone={this.makeTaskDone}
            deleteTask={this.deleteTask}
          />
        ))}
      </div>
    );
  }
}

List.propTypes = {
  getTasks: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  task: state.tasksRoot
});

export default connect(mapStateToProps, {
  getTasks,
  addTask,
  deleteTask,
  toggleTask,
})(List);
