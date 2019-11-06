import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
  Link,
} from "react-router-dom";
import ReactDOM from 'react-dom';


export default class Header extends Component {
    render(){
        return (
          <nav class="navbar navbar-light navbar-expand-lg navbar-white bg-white fixed-top">
            <div class="container">
              <img class="navbar-brand" src="logoFix.png" width={150}/>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        );
    }
}
