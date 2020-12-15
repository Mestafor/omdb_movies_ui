import React from 'react';

import { MoviesProvider } from './core/context/MoviesContext/MoviesProvider';
import { Movies } from './pages/Movies';

import './App.scss';
import { config } from './core/config/index';

function App() {
  if(!config.movieApi) {
    return <div className="App">Set you api key in the configuration file <em>src/core/config</em> {'-\>'} <em>http://www.omdbapi.com/?apikey=apiKey</em></div>
  }

  return (
    <div className="App">
      <MoviesProvider>
        <Movies />
      </MoviesProvider>
    </div>
  );
}

export default App;
