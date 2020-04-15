import React from 'react'
import { Link } from "react-router-dom"

// Import Components
import Logo from "./parts/Logo"
import InputSelect from "./parts/InputSelect"

function User(props) {
    return (
        <div className="resetTop">
        <Logo />
        <main>
            <h2 className="title"><img src="images/start/energy.png" width="50px"  alt="Driver"/> Energy Provider.</h2>
            <section className="user-info">
                <InputSelect
                    label="Tell us about your Energy Provider"
                    name="provider"
                    value={props.provider}
                    handleChange={props.handleChange}
                    options={[ "SDG&E", "SoCal Edison", "PG&E" ]}
                />
                <input type="number" name="zipcode" value={props.zipcode} onChange={props.handleChange}  placeholder="Zip Code" />
            </section>

            <section className="user-info">
                <h3 className="label">User Preferences</h3>
                <b>Slider</b>
            </section>
        </main>
        <Link to="/user" className="btn back">Back</Link>
        <Link to="/vehicle" className="btn next">Next</Link>
    </div>
    );
}

export default User;