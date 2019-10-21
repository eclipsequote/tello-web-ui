import React from 'react';
import SLExecutePanel from '../presentation/sl_executePanel';

class ExecutePanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentCommands: ['up', 'left','right', 'land']
    }
  }
  render() {
    return (
      <div>
          <SLExecutePanel commands={this.state.currentCommands}/>
      </div>
    )
  }
}

export default ExecutePanel;
