import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/themeContext";
import { LANGUAGES } from "../constants/Languages";
import { useTranslation, Trans } from "react-i18next";
function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("de");
  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, []);

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <nav id="navbar">
      <div className="logo-container">
        <div className="background-img"></div>
      </div>
      <div className="right-container">
        <Link to="/" className="home-link nav-child">
          <span className="material-symbols-outlined icon-nav">home</span>
        </Link>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <div
              className="nav-child"
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
            >
              <span className="material-symbols-outlined icon-nav">
                {darkMode ? "dark_mode" : "light_mode"}
              </span>
            </div>
          )}
        </ThemeContext.Consumer>

        <select
          id="select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {Object.keys(LANGUAGES).map((locale) => (
            <option key={locale} value={locale}>
              {locale}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
