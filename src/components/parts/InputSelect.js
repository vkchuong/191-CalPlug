import React from "react"

function InputSelect (props) {
    return(
        <div>
            <h3 className="label">{props.label}</h3>
            <select name={props.name} value={props.value}>
                {props.options.map( item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default InputSelect
