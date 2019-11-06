import React, { Component } from 'react';

import Header from './page/Header';
import Content from './page/Content';
import Footer from './page/Footer';

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
