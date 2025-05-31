import React from "react";
import { useState } from "react";

import Navbar from "./Navbar";
import GreySection from "./GreySection";
import WhiteSection from "./WhiteSection";
import Popup from "./Popup";
import GameOver from "./GameOver";
import Disclaimer from "./Disclaimer";

import statulparalel from "./poze/statulparalel.png";
import coifuldacic from "./poze/coiful-dacic.jpg";
import presedinteleales from "./poze/presedintele-ales.png";

function App() {
  // An array of messages randomly displayed in popups
  const messageList = [
    "Sunt pe urmele tale!",
    "Toti iau bani",
    "Ești următorul pe listă.",
    "Toți știu. Se fac că nu văd.",
    "Ai fost vândut de mult.",
    "Totul e pus la cale.",
    "Nimic nu e întâmplător.",
    "Zâmbesc în față, dar sapă groapa.",
    "Se plătește cu tăcere.",
    "Nu mai e cale de întoarcere.",
    "Te ascultă chiar acum.",
    "Dosarul tău e deja pe biroul lor.",
    "Adevărul nu mai contează.",
    "Toți iau, toți tac.",
    "E doar o altă marionetă.",
    "Puterea nu se dă, se fură.",
    "Ai fost doar un pion.",
    "Se fac că votează, dar au decis deja.",
    "N-ai voie să vorbești despre asta.",
    "E liniște... prea multă liniște.",
    "Te vor face să crezi că tu ești nebunul.",
    "Se spală pe mâini. Ca întotdeauna.",
    "Ei controlează tot, inclusiv tăcerea ta.",
    "Nu mai există alegeri. Doar iluzia lor.",
    "Sistemul nu greșește. Doar elimină.",
    "Cine vorbește, dispare.",
    "Adevărul e prea periculos pentru ei.",
    "Toți luptă pentru putere, nimeni pentru oameni.",
    "Ți-au dat libertate pe hârtie.",
    "Tot ce vezi e regizat.",
    "Au pus o păpușă în frunte și i-au dat un costum.",
  ];

  // Constants defining percentage ranges for popup positioning
  const min = 0;
  const maxTop = 46;
  const maxLeft = 85;

  const [quantity, setQuantity] = useState(0); // State to track the number of popups created

  const [increment, setIncrement] = useState(1); // State controlling the increment of popups appearing

  const [popupList, setPopupList] = useState([]); // State for the list of currently visible popups

  const [gameOver, setGameOver] = useState(false); // State flag to show/hide the GameOver component

  const [disclaimer, setDisclaimer] = useState(false); // State flag to show/hide the Disclaimer component

  /**
   * Returns a random percentage string (e.g., "34%") within a given min-max range.
   * Used to position popups randomly on the screen.
   */
  function getRandomPercent(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min + "%";
  }

  /**
   * Returns a random message from the messageList.
   * Used for displaying in each popup.
   */
  function getRandomMessage() {
    const index = Math.floor(Math.random() * messageList.length);
    return messageList[index];
  }

  /**
   * Adds a new popup object to the popupList state.
   * Called by openPopup() to add new popups at random positions.
   */
  function handlePopupList(top, left, message, quantity) {
    setPopupList((popupList) => [
      ...popupList,
      {
        key: quantity,
        height: top,
        width: left,
        content: message,
        show: true,
      },
    ]);
  }

  /**
   * Opens 'times' number of popups, randomly positioned, with random messages.
   * Also increments the global increment state and triggers game over if limit exceeded.
   */
  function openPopup(times) {
    for (let index = 0; index < times; index++) {
      const left = getRandomPercent(min, maxLeft);
      const top = getRandomPercent(min, maxTop);
      const message = getRandomMessage();
      setQuantity((quantity) => quantity + 1);
      handlePopupList(top, left, message, quantity + index);
    }
    setIncrement((increment) => increment + quantity + quantity);
    if (increment >= 170) {
      handleGameOver();
    }
  }

  /**
   * Opens a new browser window (called from GreySection and WhiteSection components via openWindow prop).
   * Also triggers additional popups.
   */
  function openWindow(link) {
    window.open(link);
    openPopup(increment);
  }

  /**
   * Hides (closes) a popup by setting its 'show' property to false.
   * Called when a user closes a popup in the Popup component.
   */
  function closePopup(id) {
    setPopupList((popupList) =>
      popupList.map((popup, index) =>
        index === id
          ? {
              ...popup,
              key: quantity,
              height: popupList.height,
              width: popupList.width,
              content: popupList.content,
              show: false,
            }
          : popup
      )
    );
  }

  /**
   * Sets the game over state to true.
   * Called in openPopup() when increment exceeds a threshold.
   */
  function handleGameOver() {
    setGameOver(true);
  }

  /**
   * Resets the game state and shows the disclaimer screen.
   * Triggered from GameOver component via 'disclaimer' prop.
   */
  function handleDisclaimer() {
    setGameOver(false);
    setDisclaimer(true);
    setPopupList([]);
    setQuantity(0);
    setIncrement(1);
  }

  /**
   * Restarts the game by hiding the disclaimer screen.
   * Triggered from Disclaimer component via 'restart' prop.
   */
  function restart() {
    setDisclaimer(false);
  }

  return (
    <div className="App">
      <Navbar />
      {/* Render active popups from popupList */}
      {popupList.map(
        (popupList) =>
          popupList.show && (
            <Popup
              id={popupList.key}
              top={popupList.height}
              left={popupList.width}
              message={popupList.content}
              closePopup={closePopup}
            />
          )
      )}
      {/* Conditionally render GameOver screen */}
      {gameOver && <GameOver disclaimer={handleDisclaimer} />}
      {/* Conditionally render Disclaimer screen */}
      {disclaimer && <Disclaimer restart={restart} />}

      {/* Main content sections with conspiracy-themed text and images */}
      <GreySection
        id={"statulparalel"}
        bgColor={"grey"}
        photo={statulparalel}
        p1={
          "România nu este condusă de cei pe care îi votăm. Adevărata putere nu stă în Parlament sau la Palatul Victoria. Există un stat paralel, o rețea de oameni din serviciile secrete, magistratură, corporații străine și elite financiare, care decid totul în culise. Alegerile? O farsă. Legile? Scrise pentru a proteja interesele lor. Poporul? O masă manipulată prin frică și dezinformare."
        }
        p2={
          "După 1989, România nu a fost eliberată, ci capturată de o rețea de oameni din vechile structuri securiste și noua elită politică formată sub influența Occidentului. Au preluat controlul serviciilor, justiției și economiei. Ei sunt cei care trag sforile, indiferent de cine e la putere. Președinții vin și pleacă, premierii sunt schimbați peste noapte, dar statul paralel rămâne. Nimeni nu poate atinge această caracatiță. Cine încearcă este compromis, eliminat sau redus la tăcere."
        }
        p3={
          "Singura șansă este să deschidem ochii și să nu mai cădem în capcana spectacolului electoral. Schimbarea adevărată nu poate veni de la cei deja infiltrați în sistem, ci doar dintr-o mișcare a oamenilor care înțeleg cum funcționează cu adevărat puterea. Până atunci, statul paralel va continua să conducă din umbră, folosindu-se de frică, manipulare și marionete politice."
        }
        openWindow={openWindow} // triggers link opening and popups
      />
      <WhiteSection
        id={"coifuldacic"}
        bgColor={"white"}
        photo={coifuldacic}
        p1={
          "Puțini știu adevărul despre coiful dacic, acel artefact misterios din aur, încărcat cu o energie străveche, furat și ascuns de cei care vor să șteargă istoria reală a dacilor. Oficial, ni se spune că acest coif, atribuit unor regi războinici, a fost descoperit întâmplător, pierdut sau vândut pe piața neagră. Dar dacă adevărul este mult mai întunecat?"
        }
        p2={
          "Se spune că dacii erau conectați la forțe supranaturale, iar coiful nu era doar un obiect de paradă, ci un canal de comunicare cu zeii lor, o unealtă de protecție și dominație. Cine îl purta dobândea nu doar putere fizică, ci și clarviziune. Mulți istorici alternativi cred că acest coif era, de fapt, un dispozitiv tehnologic pierdut, un soi de „cască energetică” lăsată de o civilizație antică avansată."
        }
        p3={
          "Se speculează că unii dintre cei mai bogați oameni ai lumii, poate chiar elitele care controlează destinele planetei, dețin aceste artefacte și le folosesc în ritualuri secrete. Alții cred că sunt păstrate în buncăre subterane, analizate și protejate de guverne care știu adevărul despre daci, dar refuză să-l facă public. Un lucru e sigur: adevărul despre coiful dacic ne-a fost furat. Iar cei care știu prea multe… dispar."
        }
        openWindow={openWindow} // triggers link opening and popups
      />
      <GreySection
        id={"presedinteleales"}
        bgColor={"grey"}
        photo={presedinteleales}
        p1={
          "România a fost din nou jucată din umbră. Oameni care trag sforile în culise s-au asigurat că un candidat ca Călin Georgescu, un om liber, necontrolat de structuri, nu are nicio șansă să intre în cursă. Iar când planul de rezervă a fost activat, turul 2 a fost furat sub ochii noștri, așa cum s-a întâmplat de atâtea ori în istorie."
        }
        p2={
          'Nu trebuie să fii expert în geopolitică ca să înțelegi că România e controlată de structuri din afară. De fiecare dată când apare un om care vrea suveranitate, independență și demnitate, el este blocat, ridiculizat sau pur și simplu scos din joc prin metode "tehnice".Călin Georgescu nu a fost respins pentru că nu îndeplinea criterii legale – acesta a fost doar un pretext. El a fost respins pentru că spunea adevăruri periculoase, vorbea despre colonizarea țării, despre jaful resurselor și despre cum suntem conduși prin marionete impuse din afară.'
        }
        p3={
          "Nu e nevoie să căutăm prea departe. Totul vine din aceleași centre de comandă externe, aceleași grupuri care au transformat România într-o colonie economică, dependentă și fără putere reală de decizie. Tot ce vedem sunt doar fețe diferite pentru același mecanism. Ce s-a întâmplat cu Călin Georgescu și cu turul 2 este doar un alt episod dintr-un plan mai mare, un plan care vrea să țină România sub control. Întrebarea este: cât timp vom mai accepta asta?"
        }
        openWindow={openWindow} // triggers link opening and popups
      />
    </div>
  );
}

export default App;
