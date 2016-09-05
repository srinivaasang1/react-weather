import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap} from 'react-google-maps';

export default class GoogleMapComp extends Component{
  render(){
    return(
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: '100%'
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: this.props.lat, lng: this.props.lon }}>
          </GoogleMap>
        }
      />
    );
  }
}
