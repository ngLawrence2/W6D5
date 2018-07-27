import React from 'react';
import ReactDOM from 'react-dom';



class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
  }

  render() {
    const weather = this.state.weather;

    if(weather=== null) {
      return (
        <div className = "widget">
          <h1>Loading</h1>
        </div>
        );
    } else {
      console.log(weather);
      return (
      <div className = "widget">
        <h1>Weather</h1>
          <ul>
            <li> {weather.name} </li>
            <li> {Math.round((weather.main.temp * (9/5) -459.67)*10)/10} </li>
          </ul>
      </div>
      );
    }
  }

  componentDidMount() {

    navigator.geolocation.getCurrentPosition( (pos) => {

      this.getWeather(pos);
    });
  }

  getWeather(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const xhr = new XMLHttpRequest();
    const apiKey = 'a1bb66b8aecf4ed2f77ca177cbadc404';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const changeWeather = (res) => {
      this.setState({weather: res});
    };




    // xhr.onreadystatechange = function () {
    //   if(xhr.readyState === 4 && xhr.status === 200) {
    //     console.log(xhr.responseText);
    //   }
    // };

    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const responseURL = JSON.parse(this.responseText);
          changeWeather(responseURL);
        }
      }
    };

    xhr.open("GET", apiURL, true);
    xhr.send();



  }
}

export default Weather;
