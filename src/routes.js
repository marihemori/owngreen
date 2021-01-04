import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import Hello from './pages/Hello';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hello" exact component={Hello} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;