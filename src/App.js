import React, { useState, useEffect } from 'react';
import './App.css';
import Snowfall from 'react-snowfall';
import useSound from 'use-sound';
import VaraText from './VaraText'

function App() {
  const soundUrl = process.env.PUBLIC_URL + '/assets/AllIWant.mp3';
  const [play] = useSound(soundUrl, { volume: 0.5 });
  const images = [
    './assets/pigshark1.png',
    './assets/pigshark2.png',
    './assets/pigshark3.png',
    './assets/pigshark4.png',
    './assets/pigshark5.png',
    './assets/pigshark6.png',
    './assets/pigshark7.png',
    './assets/pigshark8.png',
    './assets/pigshark9.png',
    './assets/pigshark10.png',
    './assets/pigshark11.png',
    './assets/pigshark12.png',
    './assets/pigshark13.png',
    './assets/pigshark14.png',
  ];

  const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

  // State for the background image
  const [backgroundImage, setBackgroundImage] = useState(getRandomImage());

  // Event handler for changing the background
  const changeBackground = () => {
    setBackgroundImage(getRandomImage());
  };

  // Inline style for background image
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  
  useEffect(() => {
    play();
  }, [play])

  return (
    <div className="App" style={backgroundStyle} onClick={changeBackground} >
    {/* <div className="App"> */}
      <Snowfall />
      <header className="App-header">
        <div className="vara-wrapper">
          <VaraText text="Merry Christmas and 143 pp :P" />
        </div>
      </header>
    </div>
  );
}

export default App;
