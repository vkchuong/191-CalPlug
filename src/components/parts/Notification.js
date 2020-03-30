import React from "react"

function Notification (props) {
    return (
        <div className="notification">
            <h2>CarPlug</h2>
            <p>Plugged in, wait for action.</p>
            <a href="http://google.com/" className="optimize"> Optimize </a>
            <a href="http://google.com/" className="charge"> Charge Now </a>
        </div>
    )
}

export default Notification