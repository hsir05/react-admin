import React from 'react'
// import { Router, Route, IndexRedirect, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import LayOuts from '../layout/layout.js'

import Home from '../page/home/home.jsx'
import About from '../page/about/about.jsx'
import Login from '../page/login/login.jsx'
import Form from '../page/form/form.jsx'
import Add from '../page/home/add.jsx'

const App = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/login"  component={ Login } />

        <LayOuts exact >
          <Route exact path="/"  component={ Home } />
          <Route exact path="/about"  component={ About } />

          <Route exact path="/form"  component={ Form } />
          <Route exact path="/add"  component={ Add } />
        </LayOuts>


     </Switch>
   </BrowserRouter>
    )
}

export default App
