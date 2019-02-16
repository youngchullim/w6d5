import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      selected: 0
    };
    this.changeTab = this.changeTab.bind(this);
  }
  changeTab(idx) {
    // e.preventDefault();
    // debugger
    this.setState({selected: idx});
  }

  render() {
    return (
      <div className="tabs">
        <h1 className='tab-title'>TABS:</h1>
        <ul className='headers'>
          {this.props.headers.map((tab,idx)=> {
            return (<h1 onClick={ ()=>this.changeTab(idx) } key={idx}>{tab.title}</h1>);
          })}
        </ul>
        <article className='content'>
          {this.props.headers[this.state.selected].content}
        </article>
      </div>
    );
  };
}

export default Tabs;