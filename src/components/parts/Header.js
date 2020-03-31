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
                        <li> <Link to="/setting"> Emon's Car </Link> </li>
                        <li> <Link to="/setting"> Vehicle 2 </Link> </li>
                        <li> <Link to="/setting"> Vehicle 3 </Link> </li>
                        <li> <Link to="/vehicle" className="add"> More Cars </Link> </li>
                        <li> <Link to="/" className="reset"> Reset </Link> </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="carinfo">
                      <li>Vehicle: Emon's Car</li>
                      <li>Location: My House</li>
                  </ul>
                  <div className="setting">
                    <Link to="/setting">
                      <img src="https://img.icons8.com/metro/52/000000/combo-chart.png" width="35" alt="Icon Chart"/>
                      <img src="images/home/preferences.png" width="35" alt="Icon Preferences"/>
                    </Link>
                  </div>
              </div>
              <div className="status clearfix">
                  <div className="left">
                      <div>
                        <h2>Projected Monthly Savings</h2>
                        <span><img src="images/save/lv5.png" className="piggybank" style={{width: 60}} alt="Icon" />
                          <span className="money-savings">$40.38</span>
                        </span>
                      </div>
                      <div>
                        <h2>Trees Planted <img src="images/home/info.png" className="tree" style={{width: 12}} alt="Icon" /></h2>
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