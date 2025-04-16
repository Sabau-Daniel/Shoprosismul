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
