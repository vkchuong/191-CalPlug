import React from 'react';
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';

// Import Components
import '../style/preferences.css'

class Preferences extends React.Component {

    constructor(){
        super();
        var inputLeft = document.getElementById("input-left");
        var inputRight = document.getElementById("input-right");
    
        var thumbLeft = document.querySelector(".slider > .thumb.left")
        var thumbRight = document.querySelector(".slider > .thumb.right")
        var range = document.querySelector(".slider > .range")
    
        function setLeftValue() {
            var _this = inputLeft,
                min = parseInt(_this.min),
                max = parseInt(_this.max);
    
            _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
    
            var percent = ((_this.value - min) / (max - min)) * 100;
    
            thumbLeft.style.left = percent + "%";
            range.style.left = percent + "%";
        }

        // inputLeft.addEventListener("input", setLeftValue);
    }
    
    
    render() {
        return (
            <div>
                <div className="topSection">
                    <div className="multi-range-slider">
                        <input type="range" id="input-left" min="0" max="100" value="75"/>
                        <input type="range" id="input-right" min="0" max="100" value="75"/>
    
                        <div className="slider">
                            <div className="track"></div>
                            <div className="range"></div>
                            <div className="thumb left"></div>
                            <div className="thumb right"></div>
                        </div>
                    </div>
                </div>
                <h1 className="values">Values Shown Here</h1>
                <Collapsible trigger="Cost">
                    <p>Cost Description</p>
                </Collapsible>
                <Collapsible trigger="Environment">
                    <p>Environment Description</p>
                </Collapsible>
                <Collapsible trigger="Society">
                    <p>Society Description</p>
                </Collapsible>
                <footer>
                    <Link to="./home" className="btn back">Back</Link>
                    <Link to="./home" className="btn next">Save</Link>
                </footer>
            </div>
        )
    }
    
}

export default Preferences;