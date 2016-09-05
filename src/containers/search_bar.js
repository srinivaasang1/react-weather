import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {term:''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    //weather api - c32ae342ea65ef11bc325c4df7cf0704;
  }

  onInputChange(event){
    //console.log(event.target.value);
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }

  render()
  {
    return(
      <form  onSubmit ={this.onFormSubmit} className = "input-group">
      <input
        placeholder="Please enter the City name"
        className="form-control"
        value={this.state.term}
        onChange = {this.onInputChange}/>
      <span className="input-group-btn">
      <button type="submit" className="btn submitColor">Submit</button>
      </span>

      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}


export default connect (null, mapDispatchToProps)(SearchBar);
