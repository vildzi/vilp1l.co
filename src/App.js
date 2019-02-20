import React, { Component } from 'react';
import twitterIcon from './icons/twitter-brands.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>vilP1l</h1>
          <p>Node.js Backend Dev</p>
          <div className="App-links">
            <a
              className="App-link App-link-github"
              href="https://github.com/vilP1l"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="App-link App-link-twitter"
              href="https://twitter.com/vilP1l"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="App-link App-link-discord"
              href="https://discordapp.com/users/471344177045569546"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
