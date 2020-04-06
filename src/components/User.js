import React from 'react'
import { Link } from "react-router-dom"

// Import Components
import Logo from "./parts/Logo"

function User() {
    return (
    <div className="resetTop">
        <Logo />
        <main>
            <h2 className="title"><img src="images/start/driver.png" width="50px"  alt="Driver"/> Let's get started.</h2>
            <section className="user-info">
                <h3 className="label">Tell us about yourself</h3>
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />
            </section>
            <section className="user-info">
                <h3 className="label">Username</h3>
                <input type="text" name="fname" placeholder="Username" />
                <h3 className="label">Password</h3>
                <input type="password" name="password" placeholder="Password" />
                <h3 className="label">Confirm Password</h3>
                <input type="password" name="password2" placeholder="Confirm Password" />
            </section>
        </main>
        <Link to="/charger" className="btn back">Back</Link>
        <Link to="/energy" className="btn next">Next</Link>
    </div>
    );
}

export default User;