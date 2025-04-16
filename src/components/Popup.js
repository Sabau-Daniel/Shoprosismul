export default function Popup({
  key,
  id,
  top,
  left,
  message,
  closePopup,
  show,
}) {
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
