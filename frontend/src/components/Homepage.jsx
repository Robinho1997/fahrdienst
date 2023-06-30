import React from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import { useTranslation } from "react-i18next";

function Homepage() {
  const { t } = useTranslation();

  return (
    <div className="homepage">
      <div className="link-wrapper">
        <p>{t("homepage.find")}</p>
        <Link className="link" to="/fahrt-finden">
          <span className="material-symbols-outlined icon">search</span>
        </Link>
      </div>
      <div className="link-wrapper">
        <p>{t("homepage.create")}</p>
        <Link className="link" to="/fahrt-erstellen">
          <span className="material-symbols-outlined icon">add</span>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
