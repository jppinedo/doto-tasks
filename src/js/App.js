import React from 'react';
import '../css/index.css';
import ProjectList from './components/ProjectList.jsx';
import NewProject from './components/NewProject.jsx';

function App() {
  return (
    <div className="App">
      <ProjectList />
      <NewProject />
    </div>
  );
}

export default App;
