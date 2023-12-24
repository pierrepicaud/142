import React, { useState, useEffect } from 'react';
import './App.css';
import Snowfall from 'react-snowfall';
import useSound from 'use-sound';
import VaraText from './VaraText'
import MyTypewriterComponent from './components/MyTypewriterComponent/MyTypewriterComponent';
import { useRef } from 'react';

function usePlaySoundOnMount(play) {
  const hasPlayed = useRef(false);

  if (!hasPlayed.current) {
    setTimeout(() => {
      play();
      hasPlayed.current = true;
    }, 500);
  }
}

function App() {
  const soundUrl = process.env.PUBLIC_URL + '/assets/AllIWant.mp3';
  const [play] = useSound(soundUrl, { volume: 0.5 });
  usePlaySoundOnMount(play);
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

  images.forEach(img => {
    const preloadImg = new Image();
    preloadImg.src = img;
  });

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
        <VaraText text="Season's Greetings to My Beloved Ninh" />
        </div>
        <div className='gvs text-outline darker-beige'style={{ textAlign: 'left' }}>
          <MyTypewriterComponent text="Dear Ninh, <br/ ><br/ >
            As the snowflakes gently fall and the festive lights glow, my ember thoughts of you burn brighter. Though miles away, you remain forever close in my heart. Despite the growing distance, my love for you is a commitment I renew every day.<br/ ><br/ >
            This Christmas, while we are apart, I'm sending you warmth and love across the miles hugs. May the holiday season fill your new home with joy, peace, and the comfort of knowing that you are deeply cherished.
            Looking forward to June, I'll hold onto our precious memories and the promise of a future together.<br/ ><br/ >
            Merry Christmas, nha con lợn yêu.<br/ ><br/ >
            You will always be in my heart,<br/ ><br/ >
            Liêu Dụ Thâm<br/ ><br/ >
            143" pause={5000}/>
        </div>
  
      </header>
    </div>
  );
}

export default App;
