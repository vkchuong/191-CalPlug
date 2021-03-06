import React from 'react'
import { Link } from "react-router-dom"

import Info from "./parts/Info"
import InputSelect from "./parts/InputSelect"

class Setting extends React.Component {
    handleClick = cityName => e => {
        let tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        let tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        e.currentTarget.className += " active"
    }

    render() {
        return (
            <div>
                <header style={{paddingTop: "80px", border: "none"}}>
                    <div className="top tab">
                        <ul>
                          <li className="tablinks active" value="Vehicle" onClick={this.handleClick("Vehicle")}>
                            <img alt="demo" src="images/setting/vehicle.png" /><br />Vehicle
                          </li>
                          <li className="tablinks" value="User" onClick={this.handleClick("User")}>
                            <img alt="demo" src="images/setting/user.png" /><br />User
                          </li>
                          <li className="tablinks" value="Charger" onClick={this.handleClick("Charger")}>
                            <img alt="demo" src="images/setting/charger.png" /><br />Charger
                          </li>
                        </ul>
                    </div>
                </header>
                <main>
                    <div id="Vehicle" className="tabcontent" style={{display: "block"}}>
                        <section className="log">
                            <InputSelect
                                label="Vehicle"
                                name="provider"
                                options={[ "Emon's Car", "Car 1", "Car 2"]}
                            />
                        </section>
                        <section className="log">
                            <h2 className="label">Vehicle Infomation</h2>
                            <div className="detail">
                                <ul>
                                    <Info label="Nickname" content="My Tesla" />
                                    <Info label="Manufacturer" content="TESLA" />
                                    <Info label="Model" content="V2" />
                                    <Info label="Year" content="2018" />
                                </ul>
                            </div>
                        </section>
                        <section className="log">
                            <h2 className="label">Battery Infomation</h2>
                            <div className="detail">
                                <ul>
                                    <Info label="Battery Capacity" content="14700kw" />
                                    <Info label="Nanaged SmartIons cycles" content="100 times" />
                                    <Info label="Battery Code" content="TL102" />
                                </ul>
                            </div>
                        </section>
                        <Link to="#" className="btn remove" onClick={() => alert("Do you want to delete this?")}>Remove</Link>
                        <Link to="./home" className="btn add">Add</Link>
                    </div>

                    <div id="User" className="tabcontent">
                        <section className="log">
                            <h2 className="label">User Info</h2>
                            <div className="detail">
                                <ul>
                                    <Info label="Name" content="example1" />
                                </ul>
                            </div>
                        </section>

                        <section className="percent">
                            <div id="labelHolder">
                                <span id="text-0" className="text">Cost <img src="images/setting/ask_question.png" width="20" alt="Factorsclear"></img></span>
                                <span id="text-1" className="text">Env <img src="images/setting/ask_question.png" width="20" alt="Factors"></img></span>
                                <span id="text-2" className="text">Soc <img src="images/setting/ask_question.png" width="20" alt="Factors"></img></span>
                                <span id="label-0" style={{left: 26}}>36</span>
                                <span id="label-1" style={{left: 58}}>32</span>
                                <span id="label-2" style={{right: 10}}>32</span>
                            </div>
                            <div id="slider" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left:36, width:32}}></div>
                                <span className="ui-slider-handle ui-corner-all ui-state-default" style={{left:36}}></span>
                                <span className="ui-slider-handle ui-corner-all ui-state-default" style={{left: 68}}></span>
                            </div>
                        </section>

                        <section className="log">
                            <InputSelect
                                label="Ready Before"
                                name="provider"
                                options={[ "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM" ]}
                            />
                        </section>
                        <section className="log">
                            <h2 className="label">Saving infomation</h2>
                            <div className="detail">
                                <ul>
                                    <Info label="Monthly Saving" content="$50.99" />
                                    <Info label="Monthly Tree Planting" content="50 Tree" />
                                    <Info label="Yearly Saving" content="$611.88" />
                                    <Info label="Yearly Tree Planting" content="600 Tree" />
                                </ul>
                            </div>
                        </section>
                        <Link to="./user" className="btn add">Edit</Link>
                    </div>
                    <div id="Charger" className="tabcontent">
                        <section className="log">
                            <InputSelect
                                label="Charger"
                                name="provider"
                                options={[ "Emon's Home Charger", "My Home Charger", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM" ]}
                            />
                        </section>
                        <section className="log">
                            <h2 className="label">Charger Info</h2>
                            <div className="detail">
                                <ul>
                                    <Info label="Voltage" content="LV1" />
                                    <Info label="Max Charge Rate" content="50Amps" />
                                    <Info label="EVSE ID" content="639719A4" />
                                    <Info label="Utility Plan" content="Save money and environment" />
                                </ul>
                            </div>
                        </section>
                        <section className="log">
                            <h2 className="label">Location Info</h2>
                            <div className="detail">
                                <ul>
                                    <Info label="Energy Provider" content="Save Energy" />
                                    <Info label="Zip Code" content="90001" />
                                </ul>
                            </div>
                        </section>
                        <Link to="#" className="btn remove" onClick={() => alert("Do you want to delete this?")}>Remove</Link>
                        <Link to="./charger" className="btn add">Add</Link>
                    </div>
                </main>
                <footer>
                    <Link to="./home" className="btn back">Back</Link>
                    <Link to="./home" className="btn next">Save</Link>
                </footer>
            </div>
        )
    }
}

export default Setting;
