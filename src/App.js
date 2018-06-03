import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="App-title">Welcome to Tabelada</h1>
          <button className="btn btn-primary">Teste</button>
        </div>
      </div>
    );
  }
}

export default App;
