import React, { useEffect } from 'react';
import Vara from 'vara';

function VaraText(props) {
  useEffect(() => {
    // Create a new Vara instance
    new Vara(
      "#vara-container",
    //   "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
    //   "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json",
    // "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",
      [
        {
          text: props.text,
          fontSize: 35,
          strokeWidth: 0.9,
        //   color: "#FFFFFF",
          color: "#F5F5DC",
          duration: 5000,
          textAlign: "left",
        },
      ]
    );

    // Cleanup function
    return () => {
      // Clear the SVG created by Vara inside the container
      const varaContainer = document.querySelector('#vara-container');
      if (varaContainer) {
        varaContainer.innerHTML = '';
      }
    };
  }, [props.text]); // Dependency array to re-run the effect when text changes

  return (
    <div>
      <svg style={{ height: 0 }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      <div id="vara-container" style={{ filter: 'url(#glow)' }}></div>
    </div>
  );;
}

export default VaraText;
