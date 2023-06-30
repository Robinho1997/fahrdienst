import React, { createContext, useEffect, useState } from "react";
import { ThemeContext, themes } from "./themeContext";

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.getElementById("navbar").classList.add("dark-mode");
        let elementsLight = document.querySelectorAll(".nav-child");
        for (let i = 0; i < elementsLight.length; i++) {
          elementsLight[i].style.backgroundColor = "black";
          elementsLight[i].style.border = "1px solid white";
        }
        document.getElementById("select").style.backgroundColor = "black"
        document.getElementById("select").style.border = "1px solid white";
        break;
      case themes.dark:
        document.getElementById("navbar").classList.remove("dark-mode");
        let elementsDark = document.querySelectorAll(".nav-child");
        for (let i = 0; i < elementsDark.length; i++) {
          elementsDark[i].style.backgroundColor = "#34a7b3";
          elementsDark[i].style.border = "1px solid #34a7b3";
        }
        document.getElementById("select").style.backgroundColor = "#34a7b3"
        document.getElementById("select").style.border = "1px solid #34a7b3";
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider };
