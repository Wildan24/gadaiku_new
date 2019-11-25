import React, {Component} from 'react';
import { BrowserRouter as Router, } from "react-router-dom";


class Menu extends Component{
    render(){
      return(
        <Router>
          <nav className="navbar navbar-light navbar-expand-lg navbar-white bg-white fixed-top">
            <div className="container">
              <img className="navbar-brand" src="../img/logoFix.png" width={250} height={50} alt="GadaiKu.com"/>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a href="../" className="nav-link"><strong>Home</strong></a>
                      <span className="sr-only"></span>
                  </li>
                  <li className="nav-item active">
                    <a href="../FormSimulasi"  className="nav-link"><strong>Simulation</strong></a>
                      <span className="sr-only"></span>
                  </li>
                  <li className="nav-item active">
                    <a href="../FormLoan" className="nav-link"><strong>Form</strong></a>
                    <span className="sr-only"></span>
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
