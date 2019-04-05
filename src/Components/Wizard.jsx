import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
	}
	


	handleCancel = () => {}

  render() {
    return (
      <div>
				<Switch>
					<Route  path='/wizard/step1' render={(props) => (
						<Step1 {...props}/>
					)} />
					<Route path='/wizard/step2' render={(props) => (
						<Step2 {...props}/>
					)}/>
					<Route path='/wizard/step3' render={(props) => (
						<Step3 {...props}/>
					)}/>
				</Switch>
        <Link onClick={() => this.handleCancel()} to="/">
          Cancel
        </Link>
      </div>
    );
  }
}

export default Wizard;
