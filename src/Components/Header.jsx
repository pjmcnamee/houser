import React, { Component } from 'react'
import logo from '../images/houser_logo.png'

export class Header extends Component {
  render() {
	return (
	  <div className='header'>
			<img className='logo' src={logo} alt=""/>
		<h1 className='header-inner'>Houser</h1>
	  </div>
	)
  }
}

export default Header
