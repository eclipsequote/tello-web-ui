import React, { Component } from 'react';
import SLCommand from '../presentation/sl_command';

class Command extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      val: 0,
    };
  }
  render(){
    return(
      <div>
        <SLCommand commandName={this.props.commandName}/>
      </div>
    )
  }
}

export default Command;
