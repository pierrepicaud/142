import React from 'react';
import Typewriter from 'typewriter-effect';

function MyTypewriterComponent({ text, pause }) {
  return (
    <div>
      <Typewriter
        options={{
          cursor: '', // Set the cursor to an empty string to hide it
          delay: 50,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(pause)
            .typeString(text)
            .callFunction(() => {
              // Function to hide the cursor
              const elements = document.getElementsByClassName("Typewriter__cursor");
              if (elements.length > 0) {
                elements[0].style.display = 'none';
              }
            })
            .start();
        }}
      />
    </div>
  );
}

export default MyTypewriterComponent;
