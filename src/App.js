import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './Menu';
import Home from './Page/Home';
import About from './Page/About';
import Other from './Page/Other';


class App extends Component{
  render(){
    return(
      <Router>
        <div >
          <Menu />
          <Route path="/" exact component={Home}/>
          <Route path="/Other" component={Other}/>
          <Route path="/About" component={About}/>
        </div>
      </Router>
    
    );
  }
}



export default App;