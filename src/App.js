import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import axios from 'axios'

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

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            evseid: "",
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            provider: "",
            zipcode: "",
            preferences: "",
            vehicle: "",
            made: "",
            model: "",
            option: 0
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.username.length > 0) {
            axios.post(
                'https://calplug.club/data/update.php',
                {user: this.state},
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            )
            .then(res => console.log(res.data.data))
        }
        window.location.href = "/home"
    }

    handleLogin = (event) => {
        event.preventDefault()
        if(this.state.username.length > 0) {
            axios.post(
                'https://calplug.club/data/update.php',
                {username: this.state.username},
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            )
            .then(res => {
                if(res.data.message.indexOf("Successed") > -1)
                    window.location.href = "/home"
                else
                    alert("Wrong Username")
            })
        }
    }

    updateMade = (newMade) => {
        this.setState({made: newMade})
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <Login
                            props={this.state}
                            handleLogin={this.handleLogin}
                            handleChange={this.handleChange} />
                        </Route>
                        <Route path="/login">
                            <Login
                            props={this.state}
                            handleLogin={this.handleLogin}
                            handleChange={this.handleChange} />
                        </Route>
                        <Route path="/charger">
                            <Charger
                            props={this.state}
                            handleChange={this.handleChange} />
                        </Route>
                        <Route path="/user">
                            <User
                            props={this.state}
                            handleChange={this.handleChange} />
                        </Route>
                        <Route path="/energy">
                            <Energy
                            props={this.state}
                            handleChange={this.handleChange} />
                        </Route>
                        <Route path="/vehicle">
                            <Vehicle
                            props={this.state}
                            handleChange={this.handleChange}
                            updateMade={this.updateMade}
                            handleSubmit={this.handleSubmit} />
                        </Route>
                        <Route path="/home">
                            <Home
                            props={this.state}
                            handleChange={this.handleChange} />
                        </Route>
                        <Route path="/setting">
                            <Setting
                            props={this.state}
                            handleChange={this.handleChange} />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
