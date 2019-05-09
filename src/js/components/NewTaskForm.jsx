import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
      <Form>
        <Form.Group controlId="task_title">
          <Form.Label>Nombre de la tarea</Form.Label>
          <Form.Control type="text" placeholder="Escribe el título de la nueva tarea" onChange={this.onChange} />
        </Form.Group>

        <Form.Group controlId="task_description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={this.onChange} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={this.onClick}>Agregar</Button>
      </Form>
    );
  }
}

export default NewTaskForm;