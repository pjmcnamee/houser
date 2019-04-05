import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_STEP2 } from '../store'

export class Wizard extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      imgUrl: reduxState.imgUrl,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(type, e) {
    this.setState({
      [type]: e.target.value
    });
  }

  addStepTwo = () => {
    const { imgUrl } = this.state
    store.dispatch({
      type: UPDATE_STEP2,
      payload: imgUrl
    })
  }

  componentDidMount(){
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        imgUrl: reduxState.imgUrl
      })
    })
  }


  render() {
    return (
      <div>
        <p>Step 2</p>
        <div className="input-box">
		<p>ImageUrl:</p>
          <input type="text" value={this.state.imgUrl} onChange={(e) => this.handleInputChange('imgUrl', e)}/>
        </div>
		<Link to='/wizard/step1'> Previous Step</Link>
        <Link onClick={() => this.addStepTwo()} to="/wizard/step3">
          Next Step
        </Link>
      </div>
    );
  }
}

export default Wizard;