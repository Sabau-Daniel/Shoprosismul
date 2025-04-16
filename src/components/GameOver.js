import { useState, useEffect } from "react";

export default function GameOver({ disclaimer }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 150);
  }, []);

  return (
    <div
      className={`fade-in ${
        show ? "show" : ""
      } gameover rubik-wet-paint-regular`}
    >
      <h1>GAME OVER !</h1>
      <button className="button" onClick={disclaimer}>
        Continue
      </button>
    </div>
  );
}
