import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
  Link,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import FormSimulasi from '../page/FormSimulasi';

export default class Header extends Component {
    render(){
        return (
        <Router>
          <nav class="navbar navbar-light navbar-expand-lg navbar-white bg-white fixed-top">
            <div class="container">
              <img class="navbar-brand" src="logoFix.png" width={150}/>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <Link to="/" class="nav-link">Home</Link>
                      <span class="sr-only"></span>
                  </li>
                  <li class="nav-item">
                    <Link to="/FormSimulasi" class="nav-link">Simulasi</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/" class="nav-link">Form Loan</Link>
                  </li>
                </ul>
                <Switch>
                  <Route path="/FormSimulasi"><FormSimulasi /></Route>
                </Switch>
              </div>
            </div>
          </nav>
        </Router>
        );
    }
}
