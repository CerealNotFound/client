import logo from './logo.svg';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Project App</h1>
        <a
          className="App-link"
          href="https://github.com/javasript-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </header>
    </div>
  );
}

export default App;
