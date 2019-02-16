import React from 'react';

import Clock from './clock';

import Tabs from './tab';

class Root extends React.Component {
  constructor(props) {
    super(props) 
    this.state = { 
      clock: <Clock />,
      tabs: [{ title: "one", content: "I am one"}, {title: "two", content: "I am two"}, {title: "three", content: "I am three"}]
    }
  }

  render() {
    return (
      <div>
        {this.state.clock}
        <Tabs headers={this.state.tabs} />
      </div>
    )
  }
}

export default Root;