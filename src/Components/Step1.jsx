import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {UPDATE_STEP1} from '../store'

export class Wizard extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zipcode: reduxState.zipcode
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(type, e) {
    this.setState({
      [type]: e.target.value
    });
  }
  
  addStepOne = () => {
    const { name, address, city, state, zipcode } = this.state
    let payloadHold = {name, address,city,state,zipcode}
    store.dispatch({
      type: UPDATE_STEP1,
      payload: payloadHold
    })
  }


  componentDidMount(){
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zipcode: reduxState.zipcode
      })
    })
  }

  render() {
    return (
      <div>
        <p>Step 1</p>
        <div className="input-box">
          <p>Name:</p>
          <input
            type="text"
            onChange={e => this.handleInputChange("name", e)}
            value={this.state.name}
          />
          <p>Address:</p>
          <input
            type="text"
            onChange={e => this.handleInputChange("address", e)}
            value={this.state.address}
          />
          <p>City:</p>
          <input
            type="text"
            onChange={e => this.handleInputChange("city", e)}
            value={this.state.city}
          />
          <p>State:</p>
          <input
            type="text"
            onChange={e => this.handleInputChange("state", e)}
            value={this.state.state}
          />
          <p>Zipcode:</p>
          <input
            type="text"
            onChange={e => this.handleInputChange("zipcode", e)}
            value={this.state.zipcode}
          />
        </div>
        <Link onClick={() => this.addStepOne()}  to="/wizard/step2">
          Next Step
        </Link>
      </div>
    );
  }
}

export default Wizard;