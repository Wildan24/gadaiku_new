import React,{Component, Fragment} from 'react';

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
        <Fragment>
          <Menu />
          <Route path="/" activeClassName="active" exact component={Home}/>
          <Route path="/FormSimulasi" exact component={FormSimulasi}/>
          <Route path="/FormLoan" exact component={FormLoan}/>
          <Footer />
        </Fragment>
      </Router>

    );
  }
}



export default App;
