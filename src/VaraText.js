import React, { useEffect } from 'react';
import Vara from 'vara';

function VaraText(props) {
  useEffect(() => {
    // Create a new Vara instance
    const varaInstance = new Vara(
      "#vara-container",
    //   "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
    //   "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json",
    // "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",
      [
        {
          text: props.text,
          fontSize: 40,
          strokeWidth: 0.7,
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

  return <div id="vara-container" className="z-[20]"></div>;
}

export default VaraText;
