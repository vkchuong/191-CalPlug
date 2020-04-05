import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

import './style/base.css'
import './style/home.css'
import './style/user.css'
import './style/setting.css'

import Home from './components/Home'
import User from './components/User'
import Login from './components/Login'
import Charger from './components/Charger'
import Energy from './components/Energy'
import Vehicle from './components/Vehicle'
import Setting from './components/Setting'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/charger" component={Charger} />
                <Route path="/user" component={User} />
                <Route path="/energy" component={Energy} />
                <Route path="/vehicle" component={Vehicle} />
                <Route path="/home" component={Home} />
                <Route path="/setting" component={Setting} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
