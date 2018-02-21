import React, { Component } from 'react';
import '../App.css';
//import prop-types?


class Radar extends Component {

	constructor() {
		super();

		navigator.geolocation.watchPosition((position) => {
			//console.log(position);
			this.setState({position: position});
			this.Radar();
		}, (error) => {
			console.log(error);
		});

		this.state = {
			position: null,
			weather: [],
			value: null,	//remove these
			radar: null,
		};

	}


		//AIzaSyB8jXwQl4LEqPIJnCzoCqLY1p4Gahkfltg
		//https://opendata-download-radar.smhi.se/api/version/latest/area/sweden/product/comp/2018/02/21

	Radar(){

		const url = "https://opendata-download-radar.smhi.se/api/version/latest/area/sweden/product/comp/2018/02/21"

		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				this.setState({radar: responseJson});
			})
			.catch((error) => {
				console.log(error);
		});
	}



	render() {





		return(
			<div className="radar">

			</div>
		);
	}
	
}

export default Radar;