import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { getValues } from '../utils/value-api';


class FoodJokes extends Component {

  constructor() {
    super()
    this.state = { jokes: [] };
  }

  getValueData() {
    var that = this;
    fetch("http://localhost:51039/api/values").then(function(response) {
      return response.json();
    }).then(function(json) {
      that.setState({
        jokes: json
      })
    })
  }

  componentDidMount() {
    this.getValueData();
  }

  render() {

    const { jokes }  = this.state;

    return (
      <div>
        <h3 className="text-center">Chuck Norris Food Jokes</h3>
        <hr/>

        { jokes.map((joke, index) => (
          <div className="col-sm-6" key={index}>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title"><span className="btn">{ joke }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke } </p>
                  </div>
                </div>
              </div>
          ))}

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>Get Access to Celebrity Jokes By Logging In</h2>
          </div>
        </div>

        <div className="col-sm-12">
            <div className="jumbotron text-center">
              <h2>View Celebrity Jokes</h2>
             
            </div>
        </div>
      </div>
    );
  }
}

export default FoodJokes;