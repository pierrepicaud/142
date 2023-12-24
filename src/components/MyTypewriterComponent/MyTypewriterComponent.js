import React from 'react';
import Typewriter from 'typewriter-effect';

function MyTypewriterComponent({ text, delay }) {
  return (
    <div>
      <Typewriter
        options={{
          cursor: '', // Set the cursor to an empty string to hide it
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(delay)
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
