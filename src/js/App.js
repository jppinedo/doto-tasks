import React from 'react';
import '../css/index.css';
import Home from './sections/Home.jsx';
import New from './sections/New.jsx';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.newProject = this.newProject.bind(this);
    this.state = {
      page: 'home',
      currentProject: '',
    }
  }

  newProject(title){
    let page = this.state.page;
    if(page !== 'new'){
      this.setState({
        page: 'new',
        currentProject: title,
      }, function(){
        return <Redirect to='/new' />
      })
    }
  }

  render(){
    return (
      <Router>
        <div className="container">
          <Route 
            exact path="/"  
            render={() => (
              this.state.page === 'home' ? (
                <Home newProject={this.newProject} />
              ) : (
                <Redirect to={this.state.page} />
              )
            )}
          />

          <Route 
            path="/new" 
            component={() => <New title={this.state.currentProject} />} 
          />
        </div>
      </Router>
    );
  } 
}

export default App;
