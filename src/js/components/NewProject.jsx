import React from 'react';

class NewProject extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    console.log(e.target.value);
  }

  render(){
    return (
      <div>
        <h5>Crea un nuevo proyecto:</h5>
        <label htmlFor="project-title">Nombre del proyecto:</label>
        <input id="project-title" type="text" name="project-title" placeholder="Escribe el título" onChange={this.onChange} />
        <button type="button" className="btn btn-primary" name="create" id="btn-create">Crear</button>
      </div>
    );
  }
}

export default NewProject;