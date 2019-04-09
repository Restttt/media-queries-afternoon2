import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Porfolio from './components/Portfolio/Porfolio';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showMenu: false
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Services />
        <Porfolio />
      </div>
    );
  }
}

export default App;
