import React from "react"

function Info (props) {
    return (
        <li>
            <sub className="left">{props.label}</sub>
            <sub className="right">{props.content}</sub>
        </li>
    )
}

export default Info