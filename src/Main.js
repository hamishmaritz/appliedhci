import React, { Component } from "react";
import Info from './Info'
import Method from './Method'
import Home from './Home'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
 // 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Applied HCI</h1>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/info">Info</NavLink></li>
          <li><NavLink to="/method">Method</NavLink></li>
          </ul>
          
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/info" component={Info}/>
          <Route path="/method" component={Method} />
          </div>       
          </div>
        </HashRouter>


    );
  }
}
 
export default Main;