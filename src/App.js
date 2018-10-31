import React, { Component } from 'react';

import './styles/App.css';
import Header from './components/Header';
import Data from './components/Data';

class App extends Component {
  state = {
    search: {},
    page: {},
  }
  
  render() {
    return (
      <div className="App">
        <Header 
          tagline='A database of all reddit comments ever'
          disclaimer='Not affiliated with Reddit.com'
        />
        <Data/>
      </div>
    );
  }
}

export default App;
