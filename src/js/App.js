import React from 'react';
import '../css/index.css';
import ProjectList from './components/ProjectList.jsx';
import NewProject from './components/NewProject.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.newProject = this.newProject.bind(this);
  }

  newProject(title){
    console.log("New Project: " + title);
  }

  render(){
    return (
      <div className="App">
        <ProjectList />
        <NewProject newProject={this.newProject}/>
      </div>
    );
  } 
}

export default App;
