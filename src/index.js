import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CurrentWeather from './components/CurrentWeather.js';
import EveryThirdHour from './components/EveryThirdHour.js';
import FiveDayForecast from './components/FiveDayForecast.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CurrentWeather />, document.getElementById('current'));
ReactDOM.render(<FiveDayForecast />, document.getElementById('fiveday'));
ReactDOM.render(<EveryThirdHour />, document.getElementById('thirdhour'));


registerServiceWorker();
