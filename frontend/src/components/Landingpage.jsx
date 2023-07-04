import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingpage.css";
import { useTranslation } from "react-i18next";

function Landingpage() {
  const { t } = useTranslation();

  return (
    <div className="homepage">
    <Link to="/homepage">Homepage</Link>
      <Link className="link" to="/fahrt-finden">
        <p>{t("homepage.find")}</p>
        <span className="material-symbols-outlined icon">search</span>
      </Link>

      <Link className="link" to="/fahrt-erstellen">
        <p>{t("homepage.create")}</p>
        <span className="material-symbols-outlined icon">add</span>
      </Link>

      <Link className="link" to="/chat">
        <p>Chat</p>
        <span className="material-symbols-outlined icon">chat</span>
      </Link>
    </div>
  );
}

export default Landingpage;
