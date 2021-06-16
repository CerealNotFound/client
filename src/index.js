import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import './index.scss';
const Root = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
