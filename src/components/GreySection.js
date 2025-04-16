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
