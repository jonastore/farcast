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
			weather: null,
			unit: "metric",
			wind: "m/s",
		};

		this.toggleFa = this.toggleFa.bind(this);
		this.toggleMe = this.toggleMe.bind(this);
	}

	getLocalWeather() {
		const lat = this.state.position.coords.latitude;
		const lon = this.state.position.coords.longitude;
		const apiKey = "3d1ef0c1419586e726f5115624af30ed";
		const unit = "metric";
		
		const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=" + this.state.unit +  "&APPID=" + apiKey;

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

	toggleFa(){
    	this.setState({unit: "imperial"}, () => this.getLocalWeather());
    	this.setState({wind: "mph"});
    	console.log(this.state.unit);
	}

	toggleMe() {
		this.setState({unit: "metric"}, () => this.getLocalWeather());
		this.setState({wind: "m/s"});
		console.log(this.state.unit);
	}

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
		var testweatherSunset = "No sunset today";
		var testweatherSunrise = "";

		if (myWeather) {
			location = myWeather.name;
			country = myWeather.sys.country;
			weatherTemp = myWeather.main.temp;
			weatherMain = myWeather.weather[0].main;
			weatherDescription = myWeather.weather[0].description;
			weatherWind = myWeather.wind.speed;
			weatherIcon = "http://openweathermap.org/img/w/" + myWeather.weather[0].icon + ".png";
			weatherHumidity = myWeather.main.humidity;

			var date = new Date(parseInt(myWeather.sys.sunrise)*1000);
			var weatherSunrise = date.toLocaleTimeString();

			var date = new Date(parseInt(myWeather.sys.sunset)*1000);
			var weatherSunset = date.toLocaleTimeString();

		}


		return(
			<div className="currentContainer">
				<button class="btnLeft" value="imperial" onClick={this.toggleFa}>
 					Farenheit/Imperial
				</button>
				<button class="btnRight" value="metric" onClick={this.toggleMe}>
 					Celsius/Metric
				</button>
				<ul>
					<li><h5>{ location }, { country }</h5></li>
					<li><h1>🌡️{ weatherTemp }°C</h1></li>
					<li><img src={ weatherIcon } alt="Weather icon"></img></li>
					<li><h3>{ weatherMain }</h3></li>
					<li><p className="description">{ weatherDescription }</p></li>
					<li><p className="wind">🌬️ { weatherWind } { this.state.wind }</p></li>
					<li><p>Humidity: { weatherHumidity }%</p></li>
					<li><p>☀️🔺 { weatherSunrise }</p></li>
					<li><p>☀️🔻 { weatherSunset }</p></li>
				</ul>
			</div>
		);
	}

}

export default CurrentWeather;
