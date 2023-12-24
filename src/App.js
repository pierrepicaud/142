import React, { useState, useEffect } from 'react';
import './App.css';
import Snowfall from 'react-snowfall';
import useSound from 'use-sound';
import VaraText from './VaraText'

function App() {
  const soundUrl = process.env.PUBLIC_URL + '/assets/AllIWant.mp3';
  const [play] = useSound(soundUrl, { volume: 0.5 });
  const images = [
    'assets/christmas1.png',
    'assets/christmas2.png',
    'assets/christmas3.png',
    'assets/christmas4.png',
    'assets/christmas5.png',
    'assets/christmas6.png',
    'assets/christmas7.png',
    'assets/christmas8.png',
    'assets/christmas9.png',
    'assets/christmas10.png',
    'assets/christmas11.png',
    'assets/christmas12.png',
    'assets/christmas13.png',
    'assets/christmas14.png',
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
