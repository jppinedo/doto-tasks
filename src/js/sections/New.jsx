import React from 'react';
import NewTaskForm from '../components/NewTaskForm.jsx';
import TaskList from '../components/TaskList.jsx';

class New extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      project: {
        title: this.props.title || 'Sin título',
      },
      todos: [],
    }
    this.newTodo = this.newTodo.bind(this);
  }

  newTodo(todo){
    let allTodos = this.state.todos;
    allTodos.push(todo);
    this.setState({
      todos: allTodos,
    })
  }

  render(){
    return(
      <div className="New">
        <h5>{this.state.project.title}</h5>
        <NewTaskForm key={this.state.todos} newTodo={this.newTodo} />
        <TaskList list={this.state.todos} />
      </div>
    );
  }
}

export default New;