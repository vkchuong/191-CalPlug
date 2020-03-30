import React from 'react'

function Setting() {
  return (
    <div>
        <header>
            <div className="top tab">
                <ul>
                  <li className="tablinks active">
                    <img alt="demo" src="images/setting/vehicle.png" /><br />Vehicle
                  </li>
                  <li className="tablinks">
                    <img alt="demo" src="images/setting/user.png" /><br />User
                  </li>
                  <li className="tablinks">
                    <img alt="demo" src="images/setting/charger.png" /><br />Charger
                  </li>
                </ul>
            </div>
        </header>
        <main>
            <div id="Vehicle" className="tabcontent" style={{display: "block"}}>
                <section className="log">
                    <h2 className="label">Vehicle</h2>
                    <div className="detail">
                        <section className="time" style={{textAlign: "center"}}>
                            <select style={{fontSize: "100%", padding: "5px", margin: "10px auto", width: "90%"}}>
                                <option selected="selected">Profile 1</option>
                                <option>Profile 2</option>
                                <option>Profile 3</option>
                            </select>
                        </section>
                    </div>
                </section>
                <section className="log">
                    <h2 className="label">Vehicle Infomation</h2>
                    <div className="detail">
                        <ul>
                            <li>
                                <sub className="left">Nickname</sub>
                                <sub className="right">My Tesla</sub>
                            </li>
                            <li>
                                <sub className="left">Manufacturer</sub>
                                <sub className="right">TESLA</sub>
                            </li>
                            <li>
                                <sub className="left">Model</sub>
                                <sub className="right">V2</sub>
                            </li>
                            <li>
                                <sub className="left">Year</sub>
                                <sub className="right">2018</sub>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="log">
                    <h2 className="label">Battery Infomation</h2>
                    <div className="detail">
                        <ul>
                            <li>
                                <sub className="left">Battery Capacity</sub>
                                <sub className="right">14700kw</sub>
                            </li>
                            <li>
                                <sub className="left">Nanaged SmartIons cycles</sub>
                                <sub className="right">100 times</sub>
                            </li>
                            <li>
                                <sub className="left">Battery Code</sub>
                                <sub className="right">TL102</sub>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

            <div id="User" className="tabcontent">
                <section className="log">
                    <h2 className="label">User Info</h2>
                    <div className="detail">
                        <ul>
                            <li>
                                <sub className="left">Name</sub>
                                <sub className="right">example1</sub>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="percent">
                    <div id="labelHolder">
                        <span id="text-0" className="text">Cost <img alt="demo" src="images/setting/ask_question.png" width="20" /></span>
                        <span id="text-1" className="text">Env <img alt="demo" src="images/setting/ask_question.png" width="20" /></span>
                        <span id="text-2" className="text">Soc <img alt="demo" src="images/setting/ask_question.png" width="20" /></span>
                        <span id="label-0"></span>
                        <span id="label-1"></span>
                        <span id="label-2"></span>
                    </div>
                    <div id="slider"></div>
                </section>
                <section className="time" style={{textAlign: "center"}}>
                    Ready Before:
                    <select style={{fontAize: "100%", padding: "5px", margin: "10px auto"}}>
                        <option>01:00 AM</option>
                        <option>02:00 AM</option>
                        <option>03:00 AM</option>
                        <option>04:00 AM</option>
                        <option>05:00 AM</option>
                        <option>06:00 AM</option>
                        <option selected="selected">07:00 AM</option>
                        <option>08:00 AM</option>
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                    </select>
                </section>
                <section className="log">
                    <h2 className="label">Saving infomation</h2>
                    <div className="detail">
                        <ul>
                            <li>
                                <sub className="left">Monthly Saving</sub>
                                <sub className="right">$50.99</sub>
                            </li>
                            <li>
                                <sub className="left">Monthly Tree Planting</sub>
                                <sub className="right">50 Tree</sub>
                            </li>
                            <li>
                                <sub className="left">Yearly Saving</sub>
                                <sub className="right">$611.88</sub>
                            </li>
                            <li>
                                <sub className="left">Yearly Tree Planting</sub>
                                <sub className="right">600 Tree</sub>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <div id="Charger" className="tabcontent">
                <section className="log">
                    <h2 className="label">Charger</h2>
                    <div className="detail">
                        <section className="time" style={{textAlign: "center"}}>
                            <select style={{fontAize: "100%", padding: "5px", margin: "10px auto", width: "90%"}}>
                                <option>Emon Home Charger</option>
                                <option selected="selected">My Home Charger</option>
                            </select>
                        </section>
                    </div>
                </section>
                <section className="log">
                    <h2 className="label">Charger Info</h2>
                    <div className="detail">
                        <ul>
                            <li>
                                <sub className="left">Voltage</sub>
                                <sub className="right">LV1</sub>
                            </li>
                            <li>
                                <sub className="left">Max Charge Rate</sub>
                                <sub className="right">50Amps</sub>
                            </li>
                            <li>
                                <sub className="left">EVSE ID <img alt="demo" src="images/setting/ask_question.png" width="15" /></sub>
                                    <sub className="right">639719A4</sub>
                            </li>
                            <li>
                                <sub className="left">Utility Plan</sub>
                                <sub className="right">Save money and environment</sub>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="log">
                    <h2 className="label">Location Info</h2>
                    <div className="detail">
                        <ul>
                            <li>
                                <sub className="left">Energy Provider</sub>
                                <sub className="right">Save Energy</sub>
                            </li>
                            <li>
                                <sub className="left">Zip Code</sub>
                                <sub className="right">90001</sub>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
        <footer>
            <a href="./home.php" className="back">Back</a>
            <a href="./home.php" className="save">Save</a>
        </footer>
    </div>
  )
}

export default Setting;
