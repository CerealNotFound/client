import React from 'react';
import { Route } from 'react-router-dom';
import ReactPage from './pages/Display/App';

// Create Routes With Page Name
const Routes = () => {
  return <Route exact path="/" component={ReactPage} />;
};

export default Routes;
