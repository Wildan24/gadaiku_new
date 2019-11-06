import React, { Component } from 'react';

import Header from './page/Header';
import Footer from './page/Footer';
import Content from './page/Content';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
