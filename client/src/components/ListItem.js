import React, { Component } from 'react';
import '../listItem.css';
import PropTypes from 'prop-types';
const tick_icon = require('../icon_tick.png');

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.getItemStateStyle = this.getItemStateStyle.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  getItemStateStyle = () => {
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
  };

  deleteTask = (event, id) => {
    event.stopPropagation();
    this.props.deleteTask(id);
  };

  render() {
    const { _id, isDone, name } = this.props.task;
    return (
      <div
        className="list_item"
        style={this.getItemStateStyle()}
        onClick={() => this.props.makeTaskDone(_id)}
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
}

ListItem.propTypes = {
  makeTaskDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};
