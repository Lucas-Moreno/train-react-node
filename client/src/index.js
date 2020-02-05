import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';


import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/home' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))


serviceWorker.unregister();
