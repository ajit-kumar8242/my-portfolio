import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  console.log("ThemeToggle rendering - isDarkMode:", isDarkMode);

  const handleClick = () => {
    console.log("Theme toggle clicked - current isDarkMode:", isDarkMode);
    toggleTheme();
  };

  return;
  // <button
  //   onClick={handleClick}
  //   className="p-2 rounded-full bg-transparent hover:bg-gray-800/10 dark:hover:bg-white/10 transition-colors duration-200"
  //   aria-label="Toggle theme"
  // >
  //   {isDarkMode ? (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       className="h-5 w-5 text-yellow-500"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       stroke="currentColor"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={2}
  //         d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  //       />
  //     </svg>
  //   ) : (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       className="h-5 w-5 text-gray-800 dark:text-white"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       stroke="currentColor"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={2}
  //         d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  //       />
  //     </svg>
  //   )}
  // </button>
};

export default ThemeToggle;
