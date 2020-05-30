import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;