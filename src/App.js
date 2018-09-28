import React, { Component } from 'react';
import './css/App.css';
import AppRouter from './AppRouter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <AppRouter/>
      </div>
    );
  }
}

export default App;
