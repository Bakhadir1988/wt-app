/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

export const userDarkMode = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [theme, setTheme] = useState(localStorage.theme);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  return [colorTheme, setTheme];
};
