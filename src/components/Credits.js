export default function Credits({ restart }) {
  return (
    <div className="credits">
      <p className="credits-title">Îți mulțumesc că ai jucat jocul meu! </p>
      <p className="credits-message">
        Acesta a fost un pamflet și trebuie tratat ca atare. Scopul acestui
        scurt joc este să simuleze frica și paranoia pe care le experimentează
        protagonistul atunci când intră într-o comunitate de „fani” Georgescu,
        unde este „spălat pe creier”.
      </p>
      <button className="button" onClick={restart}>
        Restart
      </button>
      <p className="credits-author">
        Proiect realizat in React de Sabău Daniel
      </p>
    </div>
  );
}
