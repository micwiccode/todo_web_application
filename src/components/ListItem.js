import React, { Component } from 'react';
import '../listItem.css';

export class ListItem extends Component {
  getItemStateStyle = () => {
    return this.props.task.isDone
      ? {
          backgroundColor: '#7465ff',
          color: '#fff',
          textDecoration: 'line-through'
        }
      : {
          backgroundColor: '#fff',
          color: '#000',
          textDecoration: 'none'
        };
  };

  render() {
    const { id, isDone, name } = this.props.task;
    return (
      <div
        className="list_item"
        style={this.getItemStateStyle()}
        onClick={() => this.props.makeTaskDone(id)}
      >
        <div className="list_item__name">
          <input type="checkbox" className="list_item__name__checkbox" checked={isDone}/>
          <label className="list_item__name__text">{name}</label>
        </div>
        <div className="list_item__buttons">
          <button className="list_item__buttons__delete"></button>
        </div>
      </div>
    );
  }
}
