import React from 'react';
import Hello from './Hello';
import Name from './name';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
export default()=>(
    <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Hello} />
            <Route path="/name" exact component={Name} />
          </Switch>
    </BrowserRouter>
)