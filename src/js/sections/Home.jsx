import React from 'react';
import ProjectList from '../components/ProjectList.jsx';
import NewProject from '../components/NewProject.jsx';

class Home extends React.Component{
  render(){
    return(
      <div className="App">
        <ProjectList />
        <NewProject newProject={this.props.newProject}/>
      </div>
    );
  }
}

export default Home;