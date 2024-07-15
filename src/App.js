import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header> 
        <Weather defaultCity="Paris" />
        <footer>
            This project was coded by {" "}
            <a 
            href="www.linkedin.com/in/maryann-njeri-4560b92a8" 
            target="_blank" 
            rel="noreferrer"
            > 
            Maryann Ichaura
            </a>, {""}is open-sourced on {" "}
            <a 
            href="https://github.com/Maryann-10/weather-react" target="_blank" 
            rel="noreferrer"
            >
            GitHub 
            </a>
            {" "}and hosted on 
            <a href='https://github.com/Maryann-10/weather-react'> Netlify</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
