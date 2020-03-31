import React from 'react'
import { Link } from "react-router-dom"

// Import Components
import Logo from "./parts/Logo"
import InputSelect from "./parts/InputSelect"

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
                <InputSelect
                    label="Tell us about your Energy Provider"
                    name="provider"
                    options={[ "chocolate", "vinh" ]}
                />
                <input type="number" name="zipcode" placeholder="Zip Code" />
            </section>
        </main>
        <Link to="/charger" className="next">Next</Link>
    </div>
    );
}

export default User;