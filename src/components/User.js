import React from 'react'
import { Link } from "react-router-dom"

// Import Components
import Logo from "./parts/Logo"

function User(props) {
    return (
        <div className="resetTop">
            <Logo />
            <main>
                <h2 className="title"><img src="images/start/driver.png" width="50px"  alt="Driver"/> Let's get started.</h2>
                <section className="user-info">
                    <h3 className="label">Tell us about yourself</h3>
                    <input type="text" name="firstname" value={props.firstname} placeholder="First Name" onChange={props.handleChange} />
                    <input type="text" name="lastname" value={props.lastname} placeholder="Last Name" onChange={props.handleChange} />
                </section>
                <section className="user-info">
                    <h3 className="label">Username</h3>
                    <input type="text" name="username" value={props.username} placeholder="Username" onChange={props.handleChange} />
                    <h3 className="label">Password</h3>
                    <input type="password" name="password" value={props.password} placeholder="Password" onChange={props.handleChange} />
                    <h3 className="label">Confirm Password</h3>
                    <input type="password" name="password2" placeholder="Confirm Password" onChange={props.handleChange} />
                </section>
            </main>
            <Link to="/charger" className="btn back">Back</Link>
            <Link to="/energy" className="btn next">Next</Link>
        </div>
    )
}

export default User;