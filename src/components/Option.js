import React from "react"

function Option (props) {
    return (
        <div className={"user-" + props.item.id, "option"}>
            <div className="label">{props.item.label}</div>
            <div className="detail charge">Charge time: {props.item.charge}</div>
            <div className="detail ready">Charge end time: {props.item.ready}</div>
            <p className="icon"><img src={"images/tree/lv" + props.item.tree + ".png"} className="tree" alt="Icon Saving"/></p>
            <p className="icon"><img src={"images/save/lv" + props.item.save + ".png"} className="save" alt="Icon Saving"/></p>
        </div>
    )
}

export default Option