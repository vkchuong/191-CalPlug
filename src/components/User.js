import React from 'react'
import {Link} from "react-router-dom"

function User() {
  return (
    <div className="resetTop">
        <header>
            <img src="images/logo.png" width="300" alt="Logo"/>
        </header>
        <main>
            <h2 className="title"><img src="images/start/driver.png" width="50px"  alt="Driver"/> Let's get started.</h2>
            <section className="user-info">
                <h3 className="label">Tell us about yourself</h3>
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />
            </section>
            <section className="user-info">
                <h3 className="label">Tell us about your Energy Provider</h3>
                <select name="provider">
                    <option>Engery Provider</option>
                    <option>Provider A</option>
                    <option>Provider B</option>
                    <option>Provider C</option>
                </select>
                <input type="number" name="zipcode" placeholder="Zip Code" />
            </section>
        </main>
        <footer>
            <Link to="/charger" className="next">Next</Link>
        </footer>
    </div>
  );
}

export default User;
