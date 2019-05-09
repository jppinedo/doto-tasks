import React from 'react';

class TodoListItem extends React.Component {
  render(){
    return (
      <li className="list-group-item">
        <h5>{this.props.title}</h5>
        <p>{this.props.description}</p>
      </li>
    );
  }
}

export default TodoListItem;