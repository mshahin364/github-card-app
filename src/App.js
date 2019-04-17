import React, { Component } from 'react';
import Card from './Card';
import './App.scss';

class App extends Component {
  render() {
    const {title} = this.props;
    return (
      <div>
        <div className="header">{title}</div>
        <Card/>
      </div>
    );
  }
}

export default App;
