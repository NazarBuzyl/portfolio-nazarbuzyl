import React, { createContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState("light");

  const setMode = (e) => {
    setCurrentTheme(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
  };

  return (
    <StateContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => React.useContext(StateContext);
