import React from 'react'
import {Link} from "react-router-dom"

// Import Components
import Logo from "./parts/Logo"

function Charger(props) {
  return (
    <div className="resetTop">
        <Logo />
        <main>
            <h2 className="title"><img src="images/start/charging_station.png" width="50px" alt="Charger" /> Charger.</h2>
            <section className="charger-info">
                <h3 className="label">Enter Your EVSE ID</h3>
                <input type="text" name="evseid" value={props.evseid} onChange={props.handleChange} placeholder="EVSE ID" />
            </section>
        </main>
        <Link to="/login" className="btn back">Back</Link>
        <Link to="/user" className="btn next">Next</Link>
    </div>
  )
}

export default Charger;
