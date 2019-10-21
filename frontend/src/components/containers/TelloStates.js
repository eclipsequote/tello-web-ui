import React from 'react';

class TelloStates extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      speed: 0,
      battery: 0,
      time: 0,
      hight: 0,
      temp: 0,
      altitude: 0,
      baro: 0,
      acceleration: [],
      tof: 0,
      wifi: 0,
    };
  }
  render(){
    return(
      <div>
        TelloState
      </div>
    )
  }
}

export default TelloStates;
