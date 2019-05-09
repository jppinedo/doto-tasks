import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewProject extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e){
    this.setState({ title: e.target.value })
  }

  onClick(){
    let title = this.state.title;
    if(this.props.newProject){
      this.props.newProject(title);
    }
  }

  render(){
    return (
      <Form>
        <h5>Crear nuevo proyecto:</h5>
        <Form.Group controlId="project_title">
          <Form.Label>Nombre del proyecto:</Form.Label>
          <Form.Control type="text" placeholder="Escribe el título" onChange={this.onChange} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={this.onClick}>
          Crear Proyecto
        </Button>
      </Form>
    );
  }
}

export default NewProject;