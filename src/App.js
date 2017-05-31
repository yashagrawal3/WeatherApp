import React, { Component } from 'react';
import './App.css';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherDisplay zip={"12345"} />
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              console.log('Clicked index '+index);
            }}
          >
              {place.name}
          </button>
        ))}
      </div>
    );
  }
}

class WeatherDisplay extends Component {
  render() {
    return (
      <div>
        <h1>Displaying the  Weather for city {this.props.zip}</h1>
        <h3> Ab aayega</h3>
      </div>
    );
  }
}

export default App;
