import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App' 
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Auth from './components/Auth/Auth'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={App} />
        <Route exact path="/auth" component ={Auth} />
      </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
