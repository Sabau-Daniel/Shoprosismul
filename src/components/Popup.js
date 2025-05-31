import React from "react";

/**
 * Popup Component
 *
 * Purpose:
 * - Displays a single pop-up message at a random position on the screen.
 * - Each popup contains a message and a close button.
 * - Controlled by the parent App component, which determines:
 *   - The popup's position (via top and left props)
 *   - The message to display
 *
 * Usage:
 * - Rendered multiple times in App.js based on the popupList state array.
 * - When the close button is clicked, the closePopup handler in App.js is called with the popup's id.
 *
 * Props:
 * - id: Unique identifier for this popup, used to close it.
 * - top: String value for CSS marginTop, controlling vertical position.
 * - left: String value for CSS marginLeft, controlling horizontal position.
 * - message: The text content to display in the popup.
 * - closePopup: Function from App.js to hide this popup when the user clicks 'x'.
 */

export default function Popup({ id, top, left, message, closePopup }) {
  return (
    <div
      className="popup"
      style={{ marginTop: top, marginLeft: left, zoom: 1 }}
    >
      <h1>{message}</h1>
      <span className="close-btn" onClick={() => closePopup(id)}>
        x
      </span>
    </div>
  );
}
