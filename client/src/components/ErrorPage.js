import React, { Component } from 'react';

class ErrorPage extends Component {
  render() {
    return(
      <div>
        Uh oh...An Error occured
        Error message: 
        {this.props.msg}
      </div>
    );
  }
}

export default ErrorPage;