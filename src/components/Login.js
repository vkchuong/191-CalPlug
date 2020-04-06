import React from 'react'
import { Link } from "react-router-dom"

// Import Components
import Logo from "./parts/Logo"

function Login() {
    return (
        <div className="resetTop">
        <Logo />
        <main>
            <h2 className="title"><img src="images/start/start.png" width="50px"  alt="Driver"/> Let's get started.</h2>
            <section className="user-info">
                <h3 className="label">Username</h3>
                <input type="text" name="fname" placeholder="Username" />
                <h3 className="label">Password</h3>
                <input type="password" name="lname" placeholder="Password" />
            </section>
        </main>
        <Link to="/charger" className="btn signup">Create Account</Link>
        <Link to="/home" className="btn next">Login</Link>
    </div>
    )
}

export default Login