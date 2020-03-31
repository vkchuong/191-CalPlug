import React from "react"
import { Link } from "react-router-dom"

function Footer (props) {
    return (
      <footer>
          <p>No Ideal Options For Me</p>
          <Link to="./home" className="chargenow">Start Default Charging<img src="images/home/triggering.png" width="20" alt="Charge Now" /></Link>
      </footer>
    )
}

export default Footer