import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import routes from './routes'
import { HashRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Header />
        <body>
        {routes}
        </body>
      </div>
      </HashRouter>
    );
  }
}

export default App;
