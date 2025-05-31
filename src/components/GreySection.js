import React from "react";

/**
 * GreySection Component
 *
 * Props:
 * - id: string, used to uniquely identify this section for anchor linking or styling.
 * - bgColor: string, CSS class name that sets the background color (e.g., "grey").
 * - photo: string, URL to the image to display on the left side.
 * - p1, p2, p3: strings, representing paragraphs of text to be displayed.
 * - openWindow: function passed from the parent component (App.js) to handle opening external links in a new window and also triggers popups.
 *
 * Usage:
 * - This component is used multiple times in App.js to create sections of the page with consistent layout but different content.
 * - Each section has a photo, some text paragraphs, and two buttons linking to external resources.
 */

export default function GreySection({
  id,
  bgColor,
  photo,
  p1,
  p2,
  p3,
  openWindow,
}) {
  return (
    <div className={bgColor} id={id}>
      <div className="ong">
        <img src={photo} alt={"deep state"} className="deep-state" />
        <div className="container">
          <h2 className="white-text">{p1}</h2>
          <h2 className="white-text">{p2}</h2>
          <h2 className="white-text">{p3}</h2>
          <div className="btn-holder">
            <button
              className="btn"
              onClick={() =>
                openWindow(
                  "https://www.facebook.com/calingeorgescuro/?locale=ro_RO"
                )
              }
            >
              Sursa
            </button>
            <button
              className="btn"
              onClick={() =>
                openWindow("https://nordis.ro/apartamente-mamaia/")
              }
            >
              Donatie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
