import React, { Component } from "react";
import Info from './Info'
import Method from './Method'
import Home from './Home'
import Data from './Data'
import Analysis from './Analysis'
import Conclusion from './Conclusion'
import Individual from './Individual'
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
          <li><NavLink to="/method">Method and Hypothesis</NavLink></li>
          <li><NavLink to="/data">Data</NavLink></li>
          <li><NavLink to="/analysis">Analysis</NavLink></li>
          <li><NavLink to="/conclusion">Conclusion</NavLink></li>
          <li><NavLink to="/individual">Individual</NavLink></li>
          </ul>
          
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/method" component={Method} />
          <Route path="/data" component={Data} />
          <Route path="/analysis" component={Analysis} />
          <Route path="/conclusion" component={Conclusion} />
          <Route path="/individual" component={Individual} />
          </div>       
          </div>
        </HashRouter>


    );
  }
}
 
export default Main;