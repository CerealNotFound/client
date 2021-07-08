import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
// import ReactPage from './pages/Display/App';

// Create Routes With Page Name
const Routes = () => {
  return (<Route exact path="/" component={LandingPage}>
    <LandingPage />
  </Route>);
}

export default Routes;
