import React, { Component } from 'react';
import '../App.css';

class CurrentWeather extends Component {

	constructor() {
		super();

		navigator.geolocation.watchPosition((position) => {
			console.log(position);
			this.setState({position: position});
			this.TenDayForecast();
		}, (error) => {
			console.log(error);
		});

		this.state = {
			position: null,
			weather: null
		};
	}


	//https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/15/lat/57/data.json

	TenDayForecast() {
		const lat = this.state.position.coords.latitude;
		const lon = this.state.position.coords.longitude;

		const latRound = Math.round(lat);
		const lonRound = Math.round(lon);
		
		const url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + lonRound + "/lat/" + latRound + "/data.json";

		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				this.setState({weather: responseJson});
			})
			.catch((error) => {
				console.log(error);
			});
	}



	render() {

		let myWeather = this.state.weather;

	
		var firstDate, secondDate, thirdDate, fourthDate, fifthDate, sixthDate, seventhDate, eightDate, ninthDate, tenthDate = "no data";
		var firstTemp, secondTemp, thirdTemp, fourthTemp, fifthTemp, sixthTemp, seventhTemp, eightTemp, ninthTemp, tenthTemp = "no data";


		if (myWeather) {
			//21
			firstDate = myWeather.timeSeries[21].validTime.replace('T', ' ').replace('Z', ' ');
			firstTemp = myWeather.timeSeries[21].parameters[1].values[0];

			secondDate = myWeather.timeSeries[45].validTime.replace('T', ' ').replace('Z', ' ');
			secondTemp = myWeather.timeSeries[45].parameters[1].values[0];

			thirdDate = myWeather.timeSeries[51].validTime.replace('T', ' ').replace('Z', ' ');
			thirdTemp = myWeather.timeSeries[51].parameters[1].values[0];

			fourthDate = myWeather.timeSeries[55].validTime.replace('T', ' ').replace('Z', ' ');
			fourthTemp = myWeather.timeSeries[55].parameters[1].values[0];

			fifthDate = myWeather.timeSeries[59].validTime.replace('T', ' ').replace('Z', ' ');
			fifthTemp = myWeather.timeSeries[59].parameters[1].values[0];

			sixthDate = myWeather.timeSeries[63].validTime.replace('T', ' ').replace('Z', ' ');
			sixthTemp = myWeather.timeSeries[63].parameters[1].values[0];

			seventhDate = myWeather.timeSeries[65].validTime.replace('T', ' ').replace('Z', ' ');
			seventhTemp = myWeather.timeSeries[65].parameters[1].values[0];

			eightDate = myWeather.timeSeries[67].validTime.replace('T', ' ').replace('Z', ' ');
			eightTemp = myWeather.timeSeries[67].parameters[1].values[0];

			ninthDate = myWeather.timeSeries[69].validTime.replace('T', ' ').replace('Z', ' ');
			ninthTemp = myWeather.timeSeries[69].parameters[1].values[0];

			tenthDate = myWeather.timeSeries[70].validTime.replace('T', ' ').replace('Z', ' ');
			tenthTemp = myWeather.timeSeries[70].parameters[1].values[0];

		}


		return(
			<div className="tenDayContainer">
				<h3>10 day forecast working</h3>
				<ul>
					<p>{ firstDate }: { firstTemp }</p>
					<p>{ secondDate }: { secondTemp }</p>
					<p>{ thirdDate }: { thirdTemp }</p>
					<p>{ fourthDate }: { fourthTemp }</p>
					<p>{ fifthDate }: { fifthTemp }</p>
					<p>{ sixthDate }: { sixthTemp }</p>
					<p>{ seventhDate }: { seventhTemp }</p>
					<p>{ eightDate }: { eightTemp }</p>
					<p>{ ninthDate }: { ninthTemp }</p>
					<p>{ tenthDate }: { tenthTemp }</p>
				</ul>
			</div>
		);
	}
}

export default CurrentWeather;
