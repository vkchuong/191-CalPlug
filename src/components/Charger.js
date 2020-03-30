import React from 'react'
import {Link} from "react-router-dom"

function Charger() {
  return (
    <div className="resetTop">
        <header>
            <img src="images/logo.png" width="300" alt="Logo"/>
        </header>
        <main>
            <h2 class="title"><img src="images/start/charging_station.png" width="50px" alt="Charger"/> Charger.</h2>
            <section class="charger-info">
                <h3 class="label">Enter Your EVSE ID</h3>
                <input type="text" name="evseid" placeholder="EVSE ID" />
            </section>
        </main>
        <footer>
            <Link to="/vehicle" className="next">Next</Link>
        </footer>
    </div>
  );
}

export default Charger;
