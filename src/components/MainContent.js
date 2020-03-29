import React from "react"
import optionData from "../data/optionData.json"
import Option from "./Option"

function MainContent (props) {
    const optionList = optionData.map(item => <Option key={item.id} item={item} />)
    return (
        <main>
            <section class="profile">
                <h3 class="title">Best Charging Option</h3>
                {optionList}
                <a href="./" class="refresh">Provide More Options</a>
            </section>
        </main>
    )
}

export default MainContent