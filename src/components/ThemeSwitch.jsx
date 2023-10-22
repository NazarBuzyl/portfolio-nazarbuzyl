import React from "react";
import { motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSwitch = () => {
  const { currentTheme, toggleTheme } = useStateContext();

  return (
    <motion.button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {currentTheme === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
};

export default ThemeSwitch;
