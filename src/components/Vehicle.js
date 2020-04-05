import React from 'react'
import {Link} from "react-router-dom"

// Import Components
import Logo from "./parts/Logo"
import InputSelect from "./parts/InputSelect"

function Vehicle() {
  return (
    <div className="resetTop">
        <Logo />
        <main>
            <h2 className="title"><img src="images/start/vehicle.png" width="50px" alt="Vehicle" /> Vehicle Information.</h2>
            <section className="vehicle-info">
                <h3 className="label">Name</h3>
                <input type="text" name="carname" placeholder="Nick Name" />
                <InputSelect
                    label="Manufacturer"
                    name="provider"
                    options={[ "TESLA", "TOYOTA", "HONDA", "LEXUS" ]}
                />
                <InputSelect
                    label="Model"
                    name="provider"
                    options={[ "V1", "V2", "V3", "V4" ]}
                />
                <h3 className="label">Year</h3>
                <input type="text" name="carname" placeholder="Year Made" />
                <InputSelect
                    label="Your car will ready by"
                    name="provider"
                    options={[ "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM" ]}
                />
            </section>
            <section className="note">
                Have more vehicles?<br />
                You can always add more cars later!
            </section>
        </main>
        <Link to="/energy" className="btn back">Back</Link>
        <Link to="/home" className="btn next">Next</Link>
    </div>
  )
}

export default Vehicle;
