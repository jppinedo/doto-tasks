import React from 'react';
import '../css/index.css';
import Header from './components/Header.jsx';
import Home from './sections/Home.jsx';
import New from './sections/New.jsx';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home',
      currentProject: '',
    }
    this.newProject = this.newProject.bind(this);
    this.changePage = this.changePage.bind(this);
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

  changePage(page){
    this.setState({ page: page })
  }

  render(){
    return (
      <div className="app-wrapper">
        <Header key={this.state.page} page={this.state.page} onClick={this.changePage}/>
        <Router>
          <div className="container mt-4">
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
      </div>
    );
  } 
}

export default App;
