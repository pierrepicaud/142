import React from 'react';
import Typewriter from 'typewriter-effect';

function MyTypewriterComponent({ text, pause, onComplete }) {
  return (
    <div>
      <Typewriter
        options={{
          cursor: '',
          delay: 50,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(pause)
            .typeString(text)
            .callFunction(() => {
              // Call onComplete function after typing is complete
              if (onComplete) {
                onComplete();
              }
            })
            .start();
        }}
      />
    </div>
  );
}

export default MyTypewriterComponent;
