import React from "react"
import {Link} from "react-router-dom"

class Header extends React.Component {
    constructor() {
      super()
      this.state = {
        "display": false
      }
    }
    handleClick = (event) => {
      event.preventDefault()
      this.setState(prev => {
         return {"display": prev.display ? false : true}
      })
    }

    changeEV = cityName => e => {
        let tablinks = document.getElementsByClassName("evlink");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        e.currentTarget.className += " active"
    }

    render() {
      return (
          <header>
              <div className="top">
                  <ul className="nav">
                    <li className="button-dropdown">
                      <a className="dropdown-toggle" href="/" onClick={this.handleClick}>
                        <img src="images/home/menu.png" width="30" alt="Menu Icon"/>
                      </a>
                      <ul className="dropdown-menu" style={{display: this.state.display?"block":"none"}}>
                        <li> <Link to ="/setting"> Vehicles </Link> </li>
                        <li> <Link to ="/setting"> Performance </Link> </li>
                        <li> <Link to ="/setting"> Settings </Link> </li>
                        <li> <Link to ="/preferences"> Preferences </Link> </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="carinfo">
                    <li className="evlink " value="Vehicle" onClick={this.changeEV("Vehicle")}>Car 1</li>
                    <li className="evlink active" value="User" onClick={this.changeEV("User")}>Emon's Car</li>
                    <li className="evlink " value="Charger" onClick={this.changeEV("Charger")}>Car 3</li>
                  </ul>
                  <div className="setting">
                    <Link to="/setting">
                      {/* <img src="https://img.icons8.com/metro/52/000000/combo-chart.png" width="35" alt="Icon Chart"/> */}
                      <img src="images/home/preferences.png" width="35" alt="Icon Preferences"/>
                    </Link>
                  </div>
              </div>
              <div className="status clearfix">
                  <div className="left">
                      <div>
                        <h2>This Month's Savings</h2>
                        <span><img src="images/save/lv5.png" className="piggybank" style={{width: 60}} alt="Icon" />
                          <span className="money-savings">$40.38</span>
                        </span>
                      </div>
                      <div>
                        <h2>Trees Planted This Month<img src="images/home/info.png" className="tree" style={{width: 12}} alt="Icon" /></h2>
                        <span><i className="icon"><img src="images/tree/lv5.png" className="tree" style={{width: 60}} alt="Icon" /></i>
                          <span className="tree-savings">x10.5</span>
                        </span>
                      </div>
                  </div>
                  <div className="right">
                      <div>Emon's Car</div>
                      <img src="images/home/unplug.png" alt="Icon" />
                      <h4 className="charge" to="/setting">Status: No power</h4>
                  </div>
              </div>
          </header>
      )
    }
}

export default Header