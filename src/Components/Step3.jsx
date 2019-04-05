import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import store, { ADD_HOUSES, RESET_VALUES } from "../store";

export class Wizard extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent,
      houses: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(type, e) {
    this.setState({
      [type]: e.target.value
    });
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      });
    });
  }

  addHouse = () => {
    const reduxState = store.getState();
    const { name, address, city, state, zipcode, imgUrl } = reduxState;
    const { mortgage, rent } = this.state;
    Axios.post("/api/houses", {
      name,
      address,
      city,
      state,
      zipcode,
      imgUrl,
      mortgage,
      rent
    })
      .then(res => console.log("Added House"))
      .then(
        Axios.get("/api/houses").then(res =>
          this.setState({ houses: res.data })
        )
      ).then(() => {
        store.dispatch({
          type: ADD_HOUSES,
          payload: this.state.houses
        })}
      ).then(() => {
        store.dispatch({
          type: RESET_VALUES,
        })}
      )
      .catch(err => console.log("Adding house front end error", err));
  };

  render() {
    return (
      <div>
        <h2>{`Recommended Rent: ${this.state.mortgage * 1.25}`}</h2>
        <p>Step 3</p>
        <div className="input-box">
          <p>Name:</p>
          <input
            type="text"
            onChange={e => this.handleInputChange("mortgage", e)}
            value={this.state.mortgage}
          />
          <p>Address:</p>
          <input
            type="text"
            onChange={e => this.handleInputChange("rent", e)}
            value={this.state.rent}
          />
        </div>
        <Link to="/wizard/step2"> Previous Step</Link>
        <Link onClick={() => this.addHouse()} to="/">
          Add House
        </Link>
      </div>
    );
  }
}

export default Wizard;
