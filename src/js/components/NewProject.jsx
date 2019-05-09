import React from 'react';

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
      <div>
        <h5>Crea un nuevo proyecto:</h5>
        <label className="d-block" htmlFor="project-title">Nombre del proyecto:</label>
        <input id="project-title" type="text" name="project-title" placeholder="Escribe el título" onChange={this.onChange} />
        <button type="button" className="btn btn-primary" name="create" id="btn-create" onClick={this.onClick} >Crear</button>
      </div>
    );
  }
}

export default NewProject;