import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import {trending,action,comedy,horror,romance,documentaries } from './urls'
import Rowpost from './Components/RowPost/Rowpost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={trending} title='Trending'/>
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={comedy} title='Comedy' isSmall />
      <Rowpost url={horror} title='Horror' isSmall />
      <Rowpost url={romance} title='Romance' isSmall />
      <Rowpost url={documentaries} title='Documentaries' isSmall />

    
    </div>
  );
}

export default App;
