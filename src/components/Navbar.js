import React from "react";

import "./index.css";
import anca from "./poze/anca-alexandrescu.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={anca} alt="soso" className="logo" />
      <h1 className="brand">Shoprosismul</h1>
      <div className="nav-content">
        <p
          className="nav-elem"
          onClick={() =>
            document
              .getElementById("statulparalel")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Statul paralel
        </p>
        <p
          className="nav-elem"
          onClick={() =>
            document
              .getElementById("coifuldacic")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Coiful dacic
        </p>
        <p
          className="nav-elem left-margin"
          onClick={() =>
            document
              .getElementById("presedinteleales")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Presedintele ales
        </p>
      </div>
    </div>
  );
}
