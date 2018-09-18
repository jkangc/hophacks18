import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import NavBar from './NavBar';

class Result extends Component {
  render() {
    return (
      <div class="col s12 m4 l3 cardsDisplay">
        <div class="card">
          <div class="card-image">
            <img src={this.props.meal.image} alt={this.props.meal.name} />
            <span class="card-title">{this.props.meal.name}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">more_horiz</i></a>
          </div>
          <div className="card-content">
            <p>{this.props.meal.category}</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    );
  }
}

class ResultPage extends Component {
  render() {
    return (
      <div>
        <NavBar updateTarget={this.props.updateTarget} />
        <div className="row">
          {this.props.results.map((meal, key) => {
            return (
              <Result meal={meal} index={key} key={key} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ResultPage;