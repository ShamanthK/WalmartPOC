import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Capital from './components/Capital'
import Logoimg from "./walmart.JPG";



class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
            <img  src={Logoimg}  alt="fireSpot" className="imgsize"/>
            <h1>Construction Management</h1>

        </header>
          <Capital />
      </div>
    );
  }
}

export default App;
