import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class TodoListItem extends React.Component {
  render(){
    return (
      <ListGroup.Item as="li">
        <h5>{this.props.title}</h5>
        <p>{this.props.description}</p>
      </ListGroup.Item>
    );
  }
}

export default TodoListItem;