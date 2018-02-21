import React, { Component } from 'react';
import '../App.css';

class CurrentWeather extends Component {

	constructor() {
		super();

		navigator.geolocation.watchPosition((position) => {
			//console.log(position);
			this.setState({position: position});
			this.getLocalWeather();
		}, (error) => {
			console.log(error);
		});

		this.state = {
			position: null,
			weather: null
		};
	}

	getLocalWeather() {
		const lat = this.state.position.coords.latitude;
		const lon = this.state.position.coords.longitude;
		const apiKey = "3d1ef0c1419586e726f5115624af30ed";
		
		const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=" + apiKey;

		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				//console.log(responseJson);
				this.setState({weather: responseJson});
			})
			.catch((error) => {
				console.log(error);
			});
	}
	//"api.openweathermap.org/data/2.5/weather"
	//"?lat=" + position.coords.latitude;
	//"&lon=" + position.coords.longitude;
	//"&APPID=3d1ef0c1419586e726f5115624af30ed


	render() {

		//let myPosition = this.state.position;
		let myWeather = this.state.weather;

		var location = "Please indicate your location.";
		var country = "No country data";
		var weatherMain = "No weather data";
		var weatherDescription = "No weather description";
		var weatherWind = "No wind data";
		var weatherIcon = "no icon to display";
		var weatherSunrise = "No sunrise today";
		var weatherSunset = "No sunset today";
		var weatherTemp = "No temperature data"; 
		var weatherHumidity = "No humidity data";

		//basically, if myPosition has a value
		//if (myPosition) {
			//location = `lat: ${myPosition.coords.latitude} lon: ${myPosition.coords.longitude}`;
			//location = myPosition.name;
		//}

		if (myWeather) {
			location = myWeather.name;
			country = myWeather.sys.country;
			weatherTemp = myWeather.main.temp;
			weatherMain = myWeather.weather[0].main;
			weatherDescription = myWeather.weather[0].description;
			weatherWind = myWeather.wind.speed;
			//weatherSunrise = myWeather.sys.sunrise; //convert this .toLocaleTimeString()
			//weatherSunset = new Date(myWeather.sys.sunset).toString();
			weatherIcon = "http://openweathermap.org/img/w/" + myWeather.weather[0].icon + ".png";
			weatherHumidity = myWeather.main.humidity;

			var date = new Date(parseInt(myWeather.sys.sunrise));
			var weatherSunrise = date.toLocaleTimeString();

			var date = new Date(parseInt(myWeather.sys.sunset));
			var weatherSunset = date.toLocaleTimeString();




		}


		return(
			<div className="currentContainer">
				<ul>
					<li><h5>{ location }, { country }</h5></li>
					<li><h1>{ weatherTemp }°C</h1></li>
					<li><img src={ weatherIcon } alt="Weather icon"></img></li>
					<li><h3>{ weatherMain }</h3></li>
					<li><p className="description">{ weatherDescription }</p></li>
					<li><p className="wind">Wind speed: { weatherWind } m/s</p></li>
					<li><p>Humidity: { weatherHumidity }%</p></li>
					<li><p>The sun will rise at: { weatherSunrise }</p></li>
					<li><p>The sun will set at: { weatherSunset }</p></li>
				</ul>
			</div>
		);
	}
}

export default CurrentWeather;
