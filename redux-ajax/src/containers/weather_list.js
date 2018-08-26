import React, { Component } from 'react';
import { connect } from  'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const { name } = cityData.city; 
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;
  

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart color="red" data={temps} units="k" /></td>
        <td><Chart color="green" data={pressures} units="hPa" /></td>
        <td><Chart color="black" data={humidities} units="%" /></td>
      </tr>
    )
  };

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              Citys
            </th>
            <th>
              Temperature (k)
            </th>
            <th>
              Pressure (hPa)
            </th>
            <th>
              Humidity (%)
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps, null)(WeatherList);