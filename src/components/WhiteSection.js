import React from "react";

/**
 * WhiteSection Component
 *
 * Purpose:
 * - Renders a white section with a background image and three paragraphs of text.
 * - Includes two buttons that trigger the openWindow function with predefined URLs.
 * - Acts as one of the informational sections displayed on the main App page.
 *
 * Usage:
 * - Receives props from App.js:
 *   - id: HTML id attribute, used for scroll-based navigation from Navbar.
 *   - bgColor: CSS class controlling background color (typically 'white').
 *   - photo: Image to be displayed in the section.
 *   - p1, p2, p3: Three separate text paragraphs to render as headings.
 *   - openWindow: Function that opens a new browser window and triggers additional pop-ups.
 *   - test: (Note: not used in this component).
 *
 * Integration:
 * - Rendered in App.js alongside GreySection to build the main page layout.
 * - Buttons trigger openWindow, which in turn adds pop-ups and opens a new tab.
 */

export default function WhiteSection({
  id,
  bgColor,
  photo,
  p1,
  p2,
  p3,
  openWindow,
  test,
}) {
  return (
    <div className={bgColor} id={id}>
      <div className="coiful-dacic">
        <img src={photo} alt={"coiful dacic"} className="photo" />
        <div className="container">
          <h2 className="black-text">{p1}</h2>
          <h2 className="black-text">{p2}</h2>
          <h2 className="black-text">{p3}</h2>

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
