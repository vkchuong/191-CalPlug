import React from "react"
import optionData from "../../data/optionData.json"
import Option from "./Option"
import { Link } from "react-router-dom"

function MainContent (props) {
    const optionList = optionData.map(item => <Option key={item.id} item={item} />)
    return (
        <main>
            <section className="profile">
                <h3 className="title">Your Charging Options</h3>
                {optionList}
                <Link to="./home" className="refresh">Provide More Options</Link>
            </section>
        </main>
    )
}

export default MainContent