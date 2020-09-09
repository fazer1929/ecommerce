import React from 'react';

import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from './components/HomeComponent/HomeComponent'
import CheckoutComponent from './components/CheckoutComponent/CheckoutComponent'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <React.Fragment>
      <HeaderComponent/>
        <Switch>
          <Route path="/checkout" >
            <CheckoutComponent/>
          </Route>
          <Route path="/">
            <HomeComponent/>
          </Route>

        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
