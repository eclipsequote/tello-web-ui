import React from 'react';
import SLCommandList from '../presentation/sl_commandsList';

class CommandList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      commands: [],
    };
  }

  componentDidMount(){
    let commands = ['takeoff', 'cw 90', 'land'];
    this.setState({
      commands: commands
    });
  }

  render(){
    return(
      <SLCommandList commands={this.state.commands}/>
    );
  }
}

export default CommandList;
