import React, { Component } from "react";
import House from "./House";
import { Link } from "react-router-dom";
import axios from "axios";
import store from '../store'

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      houses: reduxState.houses
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        houses: reduxState.houses
      });
    });

    axios
      .get("/api/houses")
      .then(res => this.setState({ houses: res.data }))
      .catch(err => console.log("Front end error on getting all houses ", err));
  }

  deleteHouse = id => {
    axios
      .delete(`/api/houses/${id}`)
      .then(res => {
        console.log(res)
        this.setState({
          houses: res.data
        });
      })
      .catch(err => console.log("Error on deleting house front end ", err));
  };

  render() {
    return (
      <div className='dashboard-master'> 
        <div className='dashboard-holder'>
        <h2>Dashboard</h2>
        <Link to="/wizard/step1">To Wizard</Link>
        <div>
          <h3>House Listings</h3>
        {this.state.houses.map((house, i) => (
          <House key={i} deleteHouse={this.deleteHouse} house={house} />
          ))}
        </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
