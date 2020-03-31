import React from "react"
import { Link } from "react-router-dom"

function Footer (props) {
    return (
      <footer style={{marginTop: "-5px"}}>
          <p style={{lineHeight: "30px"}}>No option work for me at this time</p>
          <Link to="./" className="chargenow">Charge Now <img src="images/home/triggering.png" width="20" alt="Charge Now" /></Link>
      </footer>
    )
}

export default Footer