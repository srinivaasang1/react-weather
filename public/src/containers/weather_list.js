import React , {Component} from 'React';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMapComp from '../components/google_map';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map( weath => weath.main.temp);
    const pressures = cityData.list.map( weath => weath.main.pressure);
    const humidities = cityData.list.map( weath => weath.main.humidity);
    const lat = cityData.city.coord.lat;
    const lon = cityData.city.coord.lon;


    console.log(temps);
    return(
      <tr key={name}>
        <td><GoogleMapComp lat={lat} lon={lon}/></td>
        <td>
          <Chart data={temps} color="red"/>
        </td>
        <td>
          <Chart data={pressures} color="green"/>
        </td>
        <td>
          <Chart data={humidities} color="black"/>
        </td>
      </tr>
    )
  }


  render(){
    return(
      <table className ="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>

    )
  }
}


function mapStateToProps(state){
  return{
    weather : state.weather
  };
}
//another way of writing
/*function mapStateToProps({weather}){
  return{
    weather : weather
  };
}*/

/*function mapStateToProps({weather}){
  return{
    weather
  };
}*/

export default connect(mapStateToProps)(WeatherList);
