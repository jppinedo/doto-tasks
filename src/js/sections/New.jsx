import React from 'react';

class New extends React.Component{
  render(){
    return(
      <div className="New">
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}

export default New;