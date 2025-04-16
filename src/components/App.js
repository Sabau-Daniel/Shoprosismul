import React from "react";

import { useState } from "react";

import Navbar from "./Navbar";
import GreySection from "./GreySection";
import WhiteSection from "./WhiteSection";
import Popup from "./Popup";
import GameOver from "./GameOver";
import Disclaimer from "./Credits";

import statulparalel from "./poze/statulparalel.png";
import coifuldacic from "./poze/coiful-dacic.jpg";
import presedinteleales from "./poze/presedintele-ales.png";

function App() {
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

  const min = 0;
  const maxTop = 46;
  const maxLeft = 85;

  const [quantity, setQuantity] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [popupList, setPopupList] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [disclaimer, setDisclaimer] = useState(false);

  function getRandomPercent(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min + "%";
  }

  function getRandomMessage() {
    const index = Math.floor(Math.random() * messageList.length);
    return messageList[index];
  }

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

  function openWindow(link) {
    window.open(link);
    openPopup(increment);
  }

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

  function handleGameOver() {
    setGameOver(true);
  }

  function handleDisclaimer() {
    setGameOver(false);
    setDisclaimer(true);
    setPopupList([]);
    setQuantity(0);
    setIncrement(1);
  }

  function restart() {
    setDisclaimer(false);
  }

  return (
    <div className="App">
      <Navbar />
      {popupList.map(
        (popupList) =>
          popupList.show && (
            <Popup
              key={popupList.key}
              id={popupList.key}
              top={popupList.height}
              left={popupList.width}
              message={popupList.content}
              closePopup={closePopup}
              show={popupList.show}
            />
          )
      )}
      {gameOver && <GameOver disclaimer={handleDisclaimer} />}
      {disclaimer && <Disclaimer restart={restart} />}
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
        openWindow={openWindow}
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
        openWindow={openWindow}
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
        openWindow={openWindow}
      />
    </div>
  );
}

export default App;

/*const [top, setTop] = useState("45%");
const [left, setLeft] = useState("80%");
const [message, setMessage] = useState(messageList[0]);
*/
//const [quantity, setQuantity] = useState(0);

/*function handleSetTop(min, max) {
  setTop(() => Math.floor(Math.random() * (max - min + 1)) + min + "%");
  }
  function increaseQuantity(quantity) {
    var newQuantity = setQuantity((quantity) => quantity + 1);
    return newQuantity;
  }

function handleSetLeft(min, max) {
  setLeft(() => Math.floor(Math.random() * (max - min + 1)) + min + "%");
}
*/
/*
function handleSetMessage(min, max) {
  var messageNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  setMessage(() => messageList[messageNumber]);
}
*/
