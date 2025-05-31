import React from "react";

import "./index.css";
import anca from "./poze/anca-alexandrescu.png";

/**
 * Navbar Component
 *
 * Purpose:
 * - Renders a fixed navigation bar at the top of the page.
 * - Allows the user to smoothly scroll to different sections on the page.
 *
 * Usage:
 * - Used in App.js as the top-level navigation.
 * - Uses IDs on sections to scroll to the appropriate part of the page.
 */

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
