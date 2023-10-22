import React from "react";
import { motion } from "framer-motion";

import { useStateContext } from "../contexts/ContextProvider";
import { supportedLanguages } from "../data/dummy";

function LanguageSwitch() {
  const { languageMode, setLanguageMode } = useStateContext();

  return (
    <div className="z-[500] relative">
      <motion.div
        className="fixed right-[0.9rem] bottom-[-2rem] sm:top-1/2  sm:right-[0.65rem] w-[3.5rem]
        h-[13rem]  rounded-full border border-white border-opacity-40 bg-white bg-opacity-80
        shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
        dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ x: -100, y: "-50%", opacity: 0 }}
        animate={{ x: 0, y: "-50%", opacity: 1 }}
      ></motion.div>

      <div className="flex fixed bottom-[5.25rem] right-[1rem] sm:top-1/2 w-12 px-0 sm:w-[initial] sm:-translate-y-1/2">
        <ul
          className="flex flex-col h-[initial] flex-wrap items-center justify-center
        gap-x-1 text-[0.9rem] font-medium text-gray-500"
        >
          {supportedLanguages.map((language) => (
            <motion.li
              className="w-full flex items-center justify-center relative"
              key={language}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <div
                className={`flex items-center justify-center py-3 px-3 uppercase
                hover:text-gray-950 transition cursor-pointer
                dark:text-gray-500 dark:hover:text-gray-300${
                  languageMode === language
                    ? "text-gray-950 dark:text-gray-200"
                    : ""
                }`}
                onClick={() => {
                  setLanguageMode(language);
                }}
              >
                {language}

                {language === languageMode && (
                  <motion.span
                    className="bg-gray-100 rounded-full
                    absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="languageMode"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSwitch;
