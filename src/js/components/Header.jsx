import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../logo.svg';

const links = [
  {name: 'home', path: '/'},
  {name: 'new', path: '/new'},
];

class Header extends React.Component {
  constructor(props){
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getLinks(){
    return links.map((link, i) => {
      return (
        <li key={link.name + ("-" + i)} className={"nav-item" + (this.props.page === link.name ? " active" : "")} id={link.name}>
          <a className="nav-link text-capitalize" href={link.path} onClick={e => this.onClick(link.name) }>{link.name}</a>
        </li>
      );
    })
  }

  onClick(page){
    this.props.onClick(page);
  }

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} width="40px" height="40px" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            { this.getLinks() }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;