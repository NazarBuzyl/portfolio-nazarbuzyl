import React, { createContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState("light");
  const [activeSection, setActiveSection] = React.useState("home");
  const [timeOfLastClick, setTimeOfLastClick] = React.useState(0);

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => React.useContext(StateContext);
