import React,{Component} from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './Component/Menu';
import Home from './Page/Home';
import About from './Page/About';
import Other from './Page/Other';
import Footer from './Component/Footer';


class App extends Component{
  render(){
    return(
      <Router>
        <div >
          <Menu />
          <Route path="/" exact component={Home}/>
          <Route path="/Other" component={Other}/>
          <Route path="/About" component={About}/>
          <Footer />

        </div>
      </Router>

    );
  }
}



export default App;
