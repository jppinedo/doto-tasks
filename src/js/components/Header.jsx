import React from 'react';
import logo from '../../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getLinks(){
    return this.props.links.map((link, i) => {
      return (
        <Nav.Link key={link.name + ("-" + i)} href={link.path} className="text-capitalize">{link.name}</Nav.Link>
      );
    })
  }

  onClick(page){
    this.props.onClick(page);
  }

  render(){
    return (

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} width="40px" height="40px" alt="Home" />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav pullRight className="mr-auto">
            { this.getLinks() }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Header;