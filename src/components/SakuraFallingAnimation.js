import React, { useEffect } from "react";
import $ from "jquery"; // Import jQuery

const SakuraFallingAnimation = () => {
  useEffect(() => {
    // Function to initialize Sakura Falling Animation
    const initSakuraAnimation = () => {
      // Sakura settings
      const sakuraSettings = {
        blowAnimations: ["blow-soft-left"],
        className: "sakura",
        fallSpeed: 2.5,
        maxSize: 12,
        minSize: 9,
        newOn: 250,
      };

      // Initialize Sakura Animation
      $(".sakura-falling").sakura(sakuraSettings);
    };

    // Call the function when the DOM content is loaded
    document.addEventListener("DOMContentLoaded", initSakuraAnimation);

    // Clean up: remove event listener when the component unmounts
    return () => {
      document.removeEventListener("DOMContentLoaded", initSakuraAnimation);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return <div id="sakura-container"></div>;
};

export default SakuraFallingAnimation;
