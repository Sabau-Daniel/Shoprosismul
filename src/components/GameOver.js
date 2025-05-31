import React from "react";
import { useState, useEffect } from "react";

/**
 * GameOver Component
 *
 * Props:
 * - disclaimer: function passed from the parent component (App.js) that triggers showing the Disclaimer component.
 *
 * Usage:
 * - This component is conditionally rendered in App.js when the 'gameOver' state is true.
 * - Displays a "GAME OVER!" message with a fade-in effect, and a button to proceed to the Disclaimer.
 */
export default function GameOver({ disclaimer }) {
  // Local state to control fade-in animation
  const [show, setShow] = useState(false);

  // useEffect triggers the fade-in animation by setting 'show' to true after 150ms.
  // This small delay ensures the CSS transition is triggered after the component mounts.
  useEffect(() => {
    setTimeout(() => setShow(true), 150);
  }, []);

  return (
    <div
      className={`fade-in ${
        show ? "show" : ""
      } gameover rubik-wet-paint-regular`}
    >
      {/* "GAME OVER" message */}
      <h1>GAME OVER !</h1>

      {/* Button that triggers the disclaimer() function to transition to the Disclaimer component */}
      <button className="button" onClick={disclaimer}>
        Continue
      </button>
    </div>
  );
}
