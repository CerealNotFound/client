import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Project App</h1>
        </p>
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
