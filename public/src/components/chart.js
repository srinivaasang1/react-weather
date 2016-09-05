import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default class Chart extends Component{
  render(){
    return(
      <div>
        <Sparklines data={this.props.data}  width={180} height={120} svgWidth={180} svgHeight={120}>
          <SparklinesLine color={this.props.color}/>
          <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div>{average(this.props.data)}</div>
      </div>
    );
  }
}
