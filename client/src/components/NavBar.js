import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  searchHandler = () => {
    let newTarget = document.getElementById('food_input').value;
    this.props.updateTarget({ food: newTarget });
    console.log('finished calling props function with: ' + newTarget);
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div class="nav-wrapper" >
            <a href="/" class="brand-logo center" Style="display:flex;
    align-items:center;">
            <img type="image/png" src="../../img/logo3.png" height="28" width="28" Style="margin-right: 5px"/>
              WeCook
            </a>
            <ul class="right hide-on-med-and-down">
              <div className="SearchBox row">
              <div className="col">
              <input id="food_input" type="text" placeholder="Search..." />
              </div>
              </div>
            </ul>
            <div className="col">
              <Link to="/result">    
                <i onClick={this.searchHandler} class="material-icons right">send</i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;