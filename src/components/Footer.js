import React, { Component } from 'react';
import '../App.css';
import map from '../map.png'
//import prop-types?


class Footer extends Component {

	constructor() {
		super();

		navigator.geolocation.watchPosition((position) => {
			//console.log(position);
			this.setState({position: position});
			this.Footer(); //fix this and remove navigator from footer.js
		}, (error) => {
			//console.log(error);
		});

		var date = new Date();
		var day = date.getDate();
		var month = date.getMonth()+1; //January is 0!
		var year = date.getFullYear();

		this.state = {
			footer: null,
		};

	}


	Footer(){
		
		
	}



	render() {




		return(
			<div className="footer">
				<p>this is a footer</p>
			</div>
		);
	}
	
}


export default Footer;