import React from 'react'
import {Link} from "react-router-dom"

// Import Components
import Logo from "./parts/Logo"
import InputSelect from "./parts/InputSelect"
import evData from "../data/evData.json"

class Vehicle extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            brand: [],
            listev: [],
            made: "",
            model: "",
            props: props
        }
    }
    handleSelect = (event) => {
        event.persist()
        this.setState({made: event.target.value})
        let evs = []
        for(var i = 0, len = evData.length; i < len; i++)
            if(evData[i].made === event.target.value)
                evs.push(evData[i].model)
        this.setState({ listev: evs })
        this.state.props.updateMade(event.target.value)
    }
    componentDidMount() {
        let categories = []
        for(var i = 0, len = evData.length; i < len; i++)
            if(categories.indexOf(evData[i].made) === -1)
                categories.push(evData[i].made)
        this.setState({ brand: categories })
    }
    render() {
      return (
        <div className="resetTop">
            <Logo />
            <form onSubmit={this.state.props.handleSubmit}>
                <main>
                        <h2 className="title"><img src="images/start/vehicle.png" width="50px" alt="Vehicle" /> Vehicle Information.</h2>
                        <section className="vehicle-info">
                            <h3 className="label">Name</h3>
                            <input type="text" name="vehicle" value={this.state.props.vehicle} onChange={this.state.props.handleChange} placeholder="Nick Name" />
                            {!this.state.brand ? "Loading" : <InputSelect
                                    label="Manufacturer"
                                    name="made"
                                    value={this.state.made}
                                    handleChange={this.handleSelect}
                                    options={this.state.brand}
                                />}
                            {!this.state.made ? "" : <InputSelect
                                    label="Model"
                                    name="model"
                                    handleChange={this.state.props.handleChange}
                                    options={this.state.listev}
                                />}
                        </section>
                        <section className="note">
                            Have more vehicles?<br />
                            You can always add more cars later!
                        </section>
                </main>
            <Link to="/energy" className="btn back">Back</Link>
            <button className="btn next">Next</button>
            </form>
        </div>
      )
    }
}

export default Vehicle;
