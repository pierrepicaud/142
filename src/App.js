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

  // Function to shuffle images
  const shuffleImages = (array) => array.sort(() => Math.random() - 0.5);

  const [shuffledImages, setShuffledImages] = useState(shuffleImages([...images]));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    images.forEach((img) => {
      const preloadImg = new Image();
      preloadImg.src = img;
    });
    play();
  }, [play]);



  // Inline style for background image
  const backgroundStyle = {
    backgroundImage: `url(${shuffledImages[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  // Event handler for changing the background
  const changeBackground = () => {
    if (currentIndex < shuffledImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShuffledImages(shuffleImages([...images]));
      setCurrentIndex(0);
    }
  };

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
