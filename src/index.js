import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CurrentWeather from './components/CurrentWeather.js';
import TenDayForecast from './components/TenDayForecast.js';
import FiveDayForecast from './components/FiveDayForecast.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CurrentWeather />, document.getElementById('current'));
ReactDOM.render(<FiveDayForecast />, document.getElementById('fiveday'));
ReactDOM.render(<TenDayForecast />, document.getElementById('tenday'));


registerServiceWorker();
