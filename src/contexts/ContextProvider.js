import React, { createContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState("light");
  const [activeSection, setActiveSection] = React.useState("home");
  const [timeOfLastClick, setTimeOfLastClick] = React.useState(0);
  const [languageMode, setLanguageMode] = React.useState("en");

  const toggleTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      window.localStorage.setItem("themeMode", "dark");
    } else {
      setCurrentTheme("light");
      window.localStorage.setItem("themeMode", "light");
    }
  };

  return (
    <StateContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        toggleTheme,
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        languageMode,
        setLanguageMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => React.useContext(StateContext);
