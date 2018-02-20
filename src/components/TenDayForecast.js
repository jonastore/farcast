import React, { Component } from 'react';
import '../App.css';

class CurrentWeather extends Component {

	constructor() {
		super();

		navigator.geolocation.watchPosition((position) => {
			//console.log(position);
			this.setState({position: position});
			this.TenDayForecast();
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

	//TenDayForecast() {
		


		TenDayForecast(){

			const lat = this.state.position.coords.latitude;
			const lon = this.state.position.coords.longitude;

			const latRound = Math.round(lat);
			const lonRound = Math.round(lon);
			
			const url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + lonRound + "/lat/" + latRound + "/data.json";

			fetch(url)
				.then((response) => response.json())
				.then((responseJson) => {
					console.log(responseJson);
					this.setState({weather: responseJson.timeSeries});
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

		if (myWeather) {
			//weatherTemp = myWeather.list[0]
		}
		
				//{this.state.weather.map((dynamicData, key) => <div>{ dynamicData.validTime}</div>)}

		return(
			<div className="tenDayContainer">
				<select value={this.state.value} onChange={this.changeValue}>
					<option>Ten day forecast</option>
					{this.state.weather.map((dynamicData, key) => 
						<option value={ dynamicData.parameters[1].values[0] + "°C" }>
						{ dynamicData.validTime.replace('T', ' ').replace('Z', ' ')}
						
						</option>)}
					</select>
				<h2>{ this.state.value }</h2>
			</div>
		);
	}
}

export default CurrentWeather;