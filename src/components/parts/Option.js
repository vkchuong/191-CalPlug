import React from "react"
import axios from 'axios'

class Option extends React.Component {
    handleClick = (event) => {
        axios.post(
            'http://code.com/update.php',
            {click: this.props.item.id},
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then(res => console.log(res.data.data))
    }

    render() {
        return (
            <div className={"user-" + this.props.item.id + " option"} onClick={this.handleClick}>
                <div className="label">{this.props.item.label}</div>
                <div className="detail charge">Charge time: {this.props.item.charge}</div>
                <div className="detail ready">Charge end time: {this.props.item.ready}</div>
                <p className="icon"><img src={"images/tree/lv" + this.props.item.tree + ".png"} className="tree" alt="Tree Icon"/></p>
                <p className="icon"><img src={"images/save/lv" + this.props.item.save + ".png"} className="save" alt="Piggy Bank Icon"/></p>
            </div>
        );
    }
}

export default Option