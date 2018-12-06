import React, { Component } from 'react';

import Header from './components/Header.jsx';
import Search from './components/Search.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
          tagline='A database of all reddit comments ever'
          disclaimer='Not affiliated with Reddit.com'
        />
        <Search/>
      </div>
    );
  }
}

export default App;
