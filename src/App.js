import React from 'react';

import Header from './Header/Header.js';
import Mid from './Header/Mid.js';
import Lower from './Header/Lower.js'

import './App.css';


function App() {
  // display window object 
  console.log('WINDOW OBJ: ', window);
  
  // display full screen height
  // console.log('SCREEN HEIGHT: ', window.screen.height)
  
  // display window size
  // console.log('INNER WIDTH: ', window.innerWidth);
  // console.log('INNER HEIGHT: ', window.innerHeight );
  
  // location
  // console.log('LOCATION: ', window.location)
    
  return (
    <div
      style={{ fontSize: window.innerWidth < 900 ? 8 : 16 }}
    >
      <Header />
      <Mid />
      <Lower />
    </div>
  );
}

export default App;
