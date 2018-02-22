import React, { Component } from 'react';
//import logo from './logo.svg';
import logodark from './logo.png';
import logowhite from './logowhite.png';
import './App.css';

class App extends Component {

  constructor() {
		super();

		this.state = {
			logo: logodark,
		};


	}

	changeDark() {
		//this.setState({logo: event.target.value})

	}

	changeWhite() {
		//this.setState({logo: event.target.value});
	}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
