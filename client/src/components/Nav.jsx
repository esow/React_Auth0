import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Values from './Values';
import AdminValues from './AdminValues';

const BasicExample = () => (
  <Router>
    <div>
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">      
          <li><Link to="/values">Values</Link></li>
          <li><Link to="/adminvalues">AdminValues</Link></li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
            <li><button className="btn btn-info log">Log In</button></li>
            <li><button className="btn btn-danger log">Log out </button></li>
        </ul>
      </nav>
        
        <Route exact path="/" component={Values}/>
        <Route path="/values" component={Values}/>
        <Route path="/adminvalues" component={AdminValues}/>
  </div>
  </Router>
)

export default BasicExample