import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img className='header__logo' src="./images/reddit-logo.png" alt="reddit logo"/>
          <div className='header__text'>
            <h1 className='title'>Comment Search</h1>
            <h2 className="subtitle">A browser of all reddit comments ever</h2>
          </div>
          <div className="credits">
            <h3 className="">Built by Cooper Lewis</h3>
            <h3 className="">Not affiliated with Reddit.com</h3>
          </div>
        </div>

        <div className="App-body">
          this is the body
        </div>
      </div>
    );
  }
}

export default App;
