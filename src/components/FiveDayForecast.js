import React, { Component } from 'react';
import '../App.css';

class FiveDayForeCast extends Component {

	constructor(props) {
		super(props);

		navigator.geolocation.watchPosition((position) => {
			//console.log(position);
			this.setState({position: position});
			this.getFiveDayForeCast();
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


	//https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/15/lat/57/data.json

	getFiveDayForeCast() {
		const lat = this.state.position.coords.latitude;
		const lon = this.state.position.coords.longitude;
		const apiKey = "3d1ef0c1419586e726f5115624af30ed";

		//api.openweathermap.org/data/2.5/forecast?lat=35&lon=139
		const url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=" + apiKey;
		//const url2 = "http://api.openweathermap.org/data/2.5/forecast?lat=59.31838299999999&lon=18.034421299999998&APPID=3d1ef0c1419586e726f5115624af30ed";

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
					{ this.state.weather.map((dynamicData, key) => 
						<option value={ dynamicData.main.temp  + "°C" + " " + dynamicData.weather[0].description}>
							{ dynamicData.dt_txt}
							
						</option>)}
				</select>
				<h2>{ this.state.value }</h2>
			</div>
		);
	}
}

export default FiveDayForeCast;
