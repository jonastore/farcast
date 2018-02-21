import React, { Component } from 'react';
import '../Radar.css';
import map from '../map.png'
//import prop-types?


class Radar extends Component {

	constructor() {
		super();

		navigator.geolocation.watchPosition((position) => {
			//console.log(position);
			this.setState({position: position});
			this.Radar();
		}, (error) => {
			//console.log(error);
		});

		var date = new Date();
		var day = date.getDate();
		var month = date.getMonth()+1; //January is 0!
		var year = date.getFullYear();

		this.state = {
			radar: [],
			year: year,
			month: month,
			day: day,
		};
		this.changeYear = this.changeYear.bind(this);
		this.changeMonth = this.changeMonth.bind(this);
		this.changeDay = this.changeDay.bind(this);

	}


		//AIzaSyB8jXwQl4LEqPIJnCzoCqLY1p4Gahkfltg
		//https://opendata-download-radar.smhi.se/api/version/latest/area/sweden/product/comp/2018/02/21

	Radar(){
		let url = "https://opendata-download-radar.smhi.se/api/version/latest/area/sweden/product/comp/" + this.state.year + "/" + this.state.month + "/" + this.state.day ;

		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				//console.log(responseJson);
				this.setState({radar: responseJson.files});
			})
			.catch((error) => {
				//console.log(error);
		});
	}

	changeYear(event) {
    	this.setState({year: event.target.value}, () => this.Radar());
    	console.log(this.state.year);
  	}

  	changeMonth(event) {
    	this.setState({month: event.target.value}, () => this.Radar());
    	console.log(this.state.month);
  	}

  	changeDay(event) {
    	this.setState({day: event.target.value}, () => this.Radar());
    	console.log(this.state.day);
  	}



	render() {

		let myRadar = this.state.radar;
		console.log(myRadar);


		return(
			<div className="radar">
				
				<div>
					<h2>Get historical weather data</h2>
					<select value={this.state.value} onChange={this.changeYear}>
						<option>2018</option>
						<option>2017</option>
						<option>2016</option>
						<option>2015</option>
						<option>2014</option>
					</select>
					<select value={this.state.value} onChange={this.changeMonth}>
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">April</option>
						<option value="5">May</option>
						<option value="6">June</option>
						<option value="7">July</option>
						<option value="8">August</option>
						<option value="9">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
					<select value={this.state.value} onChange={this.changeDay}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
						<option>11</option>
						<option>12</option>
						<option>13</option>
						<option>14</option>
						<option>15</option>
						<option>16</option>
						<option>17</option>
						<option>18</option>
						<option>19</option>
						<option>20</option>
						<option>21</option>
						<option>22</option>
						<option>23</option>
						<option>24</option>
						<option>25</option>
						<option>26</option>
						<option>27</option>
						<option>28</option>
						<option>29</option>
						<option>30</option>
						<option>31</option>
					</select>
				</div>
					{ myRadar.slice(0, 1).map((data, key) => <img className="radarImage" src={ data.formats[0].link }></img>)}
					<img className="mapImage" src={ map }></img>
			</div>
		);
	}
	
}


export default Radar;