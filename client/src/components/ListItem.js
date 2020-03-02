import React, { Component } from 'react';
import '../css/listItem.css';
import PropTypes from 'prop-types';
const tick_icon = require('../img/icon_tick.png');

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: false,
    };
    this.getItemStateStyle = this.getItemStateStyle.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setTaskStatus = this.setTaskStatus.bind(this);
  }

  render() {
    const { _id, isDone, name } = this.props.task;
    const { fade } = this.state;
    return (
      <div
        onClick={() => this.setTaskStatus(_id)}
        onAnimationEnd={() => this.setState({ fade: false })}
        className={fade ? 'list_item flip flip-not' : 'list_item'}
        style={this.getItemStateStyle()}
      >
        <div className="list_item__name">
          <img
            src={tick_icon}
            className="list_item__name__checkbox"
            style={{ visibility: isDone ? 'visible' : 'hidden' }}
            alt="tick_icon"
          />
          <label className="list_item__name__text">{name}</label>
        </div>
        <div className="list_item__buttons">
          <button
            className="list_item__buttons__delete"
            onClick={e => this.deleteTask(e, _id)}
          />
        </div>
      </div>
    );
  }


  getItemStateStyle() {
    return this.props.task.isDone
      ? {
        backgroundColor: '#7465ff',
        color: '#fff',
        textDecoration: 'line-through',
      }
      : {
        backgroundColor: '#fff',
        color: '#000',
        textDecoration: 'none',
      };
  }

  deleteTask(event, id) {
    event.stopPropagation();
    this.props.deleteTask(id);
  }

  setTaskStatus(id) {
    this.props.makeTaskDone(id);
    this.setState({ fade: true });
  }

}

ListItem.propTypes = {
  makeTaskDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};
