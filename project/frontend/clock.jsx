import React from 'react';

import Tabs from './tab';

class Clock extends React.Component {
   constructor(prop) {
     super(prop);
     this.state = { time: new Date()}
     this.tick = this.tick.bind(this);
   }
  
  tick() {
    this.setState({ time: new Date()})
    
  }

  componentDidMount() {
    this.x = setInterval(this.tick,1000);
  }

  componentWillUnmount() {
    clearInterval(this.x);
  }

  render() {
    return (
     
      <div className="clck">
        <h1>TIME: {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h1>
      </div>
     
      
      );
  }
}

export default Clock;