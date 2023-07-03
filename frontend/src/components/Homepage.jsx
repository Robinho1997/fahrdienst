import React from "react";
import "../styles/homepage.css";
import Footer from "./footer";
function Homepage() {
  return (
    <div>
      <div className="hero-section">
        <img src="/hero.jpg" />
        <div className="hero-content">
          <p>
            Lässig zur Universität bei 
            maximalen Komfort 
            und Spaß!
          </p>

          <button>Jetzt Mitfahren</button>
        </div>
      </div>
      <div className="sub-section-1">
        <div>
          <span className="material-symbols-outlined">monetization_on</span>
          <h2>Geld sparen</h2>
          <p>
            Wohin du auch willst, ob mit dem Bus oder als Mitfahrer, in unserem
            umfangreichen Angebot an Reisezielen und Routen findest du die
            perfekte Fahrt zu einem günstigen Preis.
          </p>
        </div>
        <div>
          <span className="material-symbols-outlined">groups</span>
          <h2>Unter deinen Mitstudenten connecten</h2>
          <p>
            Wir nehmen uns die Zeit, alle unsere Mitglieder und Buspartner
            kennenzulernen. Wie? Wir überprüfen die Bewertungen, Profile und
            Ausweisdokumente, damit du weißt, bei wem du mitfährst.
          </p>
        </div>
        <div>
          <span className="material-symbols-outlined">co2</span>
          <h2>CO2 Ausstoß verringern</h2>
          <p>
            Es war noch nie so einfach, eine Fahrt zu buchen! Dank unserer
            unkomplizierten und mit Spitzentechnologie ausgestatteten App kannst
            du in nur wenigen Minuten eine Fahrt in deiner Nähe buchen.
          </p>
        </div>
      </div>
      
      <div className="sub-section-2">
        <div>
          <h2>So funktioniert die App</h2>
          <ol>
            <li>
              Registriere dich für die App, um Zugang zu allen Funktionen zu
              erhalten.
            </li>
            <li>
              Biete Fahrten zur Universität an, indem du Startpunkt, Ziel,
              Datum, Uhrzeit und Anzahl der freien Plätze angibst.
            </li>
            <li>
              Durchsuche verfügbare Fahrten anderer Studierender und melde dich
              für Fahrten an, die deinen Bedürfnissen entsprechen.
            </li>
            <li>
              Nutze den integrierten Chat, um dich mit anderen Studierenden
              auszutauschen und Fahrgemeinschaften zu bilden.
            </li>
          </ol>
        </div>
        <img src="/coffee.png" />
      </div>
      <div className="register-section">
        <img src="/car-removebg-preview.png" />
        <div>
          <h2>Fahren und sparen</h2>
          <p>
            Melde dich als Fahrer oder Mitfahrer an und spare Fahrtkosten. Die
            Erstellung deines ersten Fahrtangebots dauert nur Minuten. Bist du
            bereit, Gas zu geben?
          </p>
          <button>Registrieren</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
