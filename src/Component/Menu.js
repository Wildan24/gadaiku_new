import React, {Component} from 'react';
import { BrowserRouter as Router, } from "react-router-dom";


class Menu extends Component{
    render(){
      return(
        <Router>
          <nav class="navbar navbar-light navbar-expand-lg navbar-white bg-white fixed-top">
            <div class="container">
              <img class="navbar-brand" src="../img/logoFix.png" width={250} height={50} alt="GadaiKu.com"/>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a href="../" class="nav-link"><strong>Home</strong></a>
                      <span class="sr-only"></span>
                  </li>
                  <li class="nav-item active">
                    <a href="../FormSimulasi"  class="nav-link"><strong>Simulation</strong></a>
                      <span class="sr-only"></span>
                  </li>
                  <li class="nav-item active">
                    <a href="../FormLoan" class="nav-link"><strong>Form</strong></a>
                    <span class="sr-only"></span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Router>

        );
    }
}

export default Menu;
