import React from 'react'
import { Link } from "react-router-dom"

// Import Components
import Logo from "./parts/Logo"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            props: props
        }
    }
    render() {
        return (
            <div className="resetTop">
                <form onSubmit={this.state.props.handleLogin}>
                    <Logo />
                    <main>
                        <h2 className="title"><img src="images/start/start.png" width="50px"  alt="Driver"/> Let's get started.</h2>
                        <section className="user-info">
                            <h3 className="label">Username</h3>
                            <input
                                type="text"
                                name="username"
                                onChange={this.state.props.handleChange}
                                value={this.state.props.username}
                                placeholder="Username" />
                            <h3 className="label">Password</h3>
                            <input
                                type="password"
                                name="password"
                                onChange={this.state.props.handleChange}
                                value={this.state.props.password}
                                placeholder="Password" />
                        </section>
                    </main>
                    <Link to="/charger" className="btn signup">Create Account</Link>
                    <button className="btn next">Login</button>
                </form>
            </div>
        )
    }
}

export default Login