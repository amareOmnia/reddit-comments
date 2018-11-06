import React, { Component } from 'react';

import Header from './components/Header.jsx';
import Data from './components/Data.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
          tagline='A database of all reddit comments ever'
          disclaimer='Not affiliated with Reddit.com'
        />
        <Data data={this.props.data} columns={this.props.columns}/>
      </div>
    );
  }
}

export default App;
