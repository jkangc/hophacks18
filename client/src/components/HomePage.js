import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/HomePage.css";

class HomePage extends Component {
  searchHandler = () => {
    let newTarget = document.getElementById('food_input').value;
    this.props.updateTarget({ food: newTarget });
    console.log('finished calling props function with: ' + newTarget);
  }

  render() {
    return (
      <div className="background">
        <div className="container">
          <h1>WeCook</h1>

          <div className="SearchBox row">
            <div className="col">
              <input id="food_input" type="text" placeholder="Search..." />
            </div>

            <div className="col">
              <Link to="/result">    
                <i onClick={this.searchHandler} className="material-icons right">send</i>
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
