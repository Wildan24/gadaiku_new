import React,{Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './Component/Menu';
import Home from './Page/Home';
import FormLoan from './Page/FormLoan';
import FormSimulasi from './Page/FormSimulasi';
import Footer from './Component/Footer';


class App extends Component{
  render(){
    return(
      <Router>
        <div >
          <Menu />
          <Route path="/" exact component={Home}/>
          <Route path="/FormSimulasi" component={FormSimulasi}/>
          <Route path="/FormLoan" component={FormLoan}/>
          <Footer />
        </div>
      </Router>

    );
  }
}



export default App;
