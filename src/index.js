import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App' 
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={App} />
      </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))


