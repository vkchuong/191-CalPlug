import React from 'react'
import {Link} from "react-router-dom"

function Vehicle() {
  return (
    <div className="resetTop">
        <header>
            <img src="images/logo.png" width="300" alt="Logo"/>
        </header>
        <main>
            <h2 class="title"><img src="images/start/vehicle.png" width="50px" alt="Vehicle" /> Vehicle Information.</h2>
            <section class="vehicle-info">
                <h3 class="label">Name</h3>
                <input type="text" name="carname" placeholder="Nick Name" />
                <h3 class="label">Manufacturer</h3>
                <select name="provider">
                    <option selected="selected">TESLA</option>
                    <option>TOYOTA</option>
                    <option>HONDA</option>
                    <option>LEXUS</option>
                </select>
                <h3 class="label">Model</h3>
                <select name="provider">
                    <option selected="selected">V1</option>
                    <option>V2</option>
                    <option>V3</option>
                    <option>V4</option>
                </select>
                <h3 class="label">Year</h3>
                <input type="text" name="carname" placeholder="Year Made" />
                <h3 class="label">Your car will ready by</h3>
                <select name="provider">
                    <option>01:00 AM</option>
                    <option>02:00 AM</option>
                    <option>03:00 AM</option>
                    <option>04:00 AM</option>
                    <option>05:00 AM</option>
                    <option>06:00 AM</option>
                    <option selected="selected">07:00 AM</option>
                    <option>08:00 AM</option>
                    <option>09:00 AM</option>
                </select>
            </section>
            <section class="note">
                Have more vehicles?<br />
                You can always add more cars later!
            </section>
        </main>
        <footer>
            <Link to="/home" className="next">Next</Link>
        </footer>
    </div>
  )
}

export default Vehicle;
