import React, {useState, useEffect} from "react"
import optionData from "../../data/optionData.json"
import Option from "./Option"
import { Link } from "react-router-dom"

function MainContent (props) {
    const [options, setOptions] = useState([])

    useEffect(() => {
        provideMore()
    }, [])

    function provideMore() {
        const optionList = []
        for(let i = 0; i < 3; i ++) {
            let id = 0
            do {
                id = Math.floor(Math.random() * optionData.length)
            }while(optionList.indexOf( optionData[id] ) > -1)
            optionList.push(optionData[id])
        }
        setOptions(optionList)
    }
    return (
        <main>
            <section className="profile">
                <h3 className="title">Your Charging Options</h3>
                {options.map(item => <Option key={item.id} item={item} />)}
                <Link to="#" className="refresh" onClick={() => provideMore()}>Provide More Options</Link>
            </section>
        </main>
    )
}

export default MainContent