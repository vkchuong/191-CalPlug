import React from "react"
import { Link } from "react-router-dom"

function Notification (props) {
    return (
        <div className="notification">
            <h2>CarPlug</h2>
            <p>Plugged in, waiting for action.</p>
            <Link to="./" className="optimize"> Optimize </Link>
            <Link to="./" className="charge"> Charge Now </Link>
        </div>
    )
}

export default Notification