import React, { Component } from 'react';
import '../App.css';
//import prop-types?


class CurrentWeather extends Component {

	constructor() {
		super();

		navigator.geolocation.watchPosition((position) => {
			//console.log(position);
			this.setState({position: position});
			this.MapLocation();
		}, (error) => {
			console.log(error);
		});

		this.state = {
			position: null,
			weather: [],
			value: null,
		};

		this.changeValue = this.changeValue.bind(this);
	}


		//AIzaSyB8jXwQl4LEqPIJnCzoCqLY1p4Gahkfltg

		MapLocation(){

		}



	render() {


		return(

			);
	}
}

export default CurrentWeather;