import React from 'react'
import {Link} from "react-router-dom"

// Import Components
import Logo from "./parts/Logo"

function Charger() {
  return (
    <div className="resetTop">
        <Logo />
        <main>
            <h2 className="title"><img src="images/start/charging_station.png" width="50px" alt="Charger" /> Charger.</h2>
            <section className="charger-info">
                <h3 className="label">Enter Your EVSE ID</h3>
                <input type="text" name="evseid" placeholder="EVSE ID" />
            </section>
        </main>
        <Link to="/vehicle" className="next">Next</Link>
    </div>
  );
}

export default Charger;
