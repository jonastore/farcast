import React, { Component } from 'react';
import '../App.css';
import Radar from './Radar.js'

class FiveDayForeCast extends Component {

	constructor(props) {
		super(props);

		navigator.geolocation.watchPosition((data) => {
			//console.log(position);
			this.setState({position: data});
			this.getFiveDayForeCast();
		}, (error) => {
			console.log(error);
		});

		this.state = {
			position: null,
			weather: [],
			value: "Select date and time above",
		};

		this.changeValue = this.changeValue.bind(this);
	}


	//https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/15/lat/57/data.json

	getFiveDayForeCast() {
		const lat = this.state.position.coords.latitude;
		const lon = this.state.position.coords.longitude;
		const apiKey = "3d1ef0c1419586e726f5115624af30ed";
		

		const url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=" + apiKey;

		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				//console.log(responseJson);
				this.setState({weather: responseJson.list});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	changeValue(event) {
    	this.setState({value: event.target.value});
    	console.log(this.state.value);
  	}



	render() {

		let myWeather = this.state.weather;
		console.log(myWeather);

		if (myWeather) {
			//weatherTemp = myWeather.list[0]
		}



		return(
			<div className="fiveDayContainer">
				<select value={this.state.value} onChange={this.changeValue}>
					<option>Five day forecast</option>
					{ this.state.weather.map((data, key) => 
						<option value={"🌡️" + data.main.temp  + "°C" + " " + data.weather[0].description + " 🌬️ " + data.wind.speed + " m/s"}>
							{ data.dt_txt }
						</option>)}
				</select>
				<h2>{ this.state.value }</h2>
				<Radar />
			</div>
		);
	}
}

export default FiveDayForeCast;
