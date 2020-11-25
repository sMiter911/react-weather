import React, { useState } from 'react';
import { dateBuilder } from './helpers';


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${process.env.REACT_APP_API_BASEURL}weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_API}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('');
          console.log(result)
        });
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 20) ?
      'app-warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          >
          </input>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className="wind">Wind: {weather.wind.speed} m/s</div>
            </div>
          </div>
        ) : (<div className="city-error">City Not Found</div>)}
      </main>
    </div>
  );
}

export default App;
