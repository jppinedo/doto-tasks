import React from 'react';
import TodoListItem from './TodoListItem.jsx';
import NewGuid from '../utils/guid.js';
import ListGroup from 'react-bootstrap/ListGroup';

function getList(list){
  if(list.length){
    return list.map((item, i) => {
      let id = NewGuid();
      return (
        <TodoListItem key={(id + i)} title={item.task_title} description={item.task_description} />
      )
    });
  } else {
    return <li className="list-group-item disabled">No hay tareas disponibles</li>;
  }
}

class TaskList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: this.props.list || [],
    }
  }
  render(){
    return (
      <ListGroup key={this.state.list} as="ul" className="mt-4">
        <ListGroup.Item as="li" active>
          Tareas disponibles:
        </ListGroup.Item>
          { getList(this.props.list) }
      </ListGroup>
    );
  }
}

export default TaskList;