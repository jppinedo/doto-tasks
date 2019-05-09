import React from 'react';

class NewTaskForm extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e){
    let source = e.target.id;
    this.setState({
      [source]: e.target.value,
    })
  }

  onClick(e){
    let newTodo = this.state;
    if(newTodo.task_title.length && newTodo.task_description.length){
      this.props.newTodo(newTodo);
    }
  }

  render(){
    return (
      <form>
        <div className="form-group">
          <label htmlFor="task_title">Nombre de la tarea</label>
          <input type="text" className="form-control" id="task_title" placeholder="Escribe el título de la nueva tarea" 
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="task_description">Descripción</label>
          <textarea className="form-control" id="task_description" rows="3" aria-describedby="task-description-help"
            onChange={this.onChange}
          ></textarea>
          <small id="task-description-help" className="form-text text-muted">Una pequeña descripción del trabajo a realizar.</small>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.onClick}>Guardar</button>
      </form>
    );
  }
}

export default NewTaskForm;