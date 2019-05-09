import React from 'react';
import TodoListItem from './TodoListItem.jsx';
import NewGuid from '../utils/guid.js';

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
      <div className="mt-4">
        <ul key={this.state.list} className="list-group">
          <li className="list-group-item active">Tareas disponibles:</li>
          { getList(this.props.list) }
        </ul>
      </div>
    );
  }
}

export default TaskList;