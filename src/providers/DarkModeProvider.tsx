"use client";

import { DarkModeContext } from "@/context/darkModeContext";
import { ReactNode, useEffect, useState } from "react";

interface DarkModeProviderProps {
  children: ReactNode;
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(true);

  //! Issue
  // useEffect(() => {
  //   const storedPreference = localStorage.getItem("theme");
  //   const prefersDarkMode = storedPreference === "dark";

  //   setIsDarkMode(prefersDarkMode);

  //   if (prefersDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }

  //   document.documentElement.style.overflowY = "auto";
  // }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("theme", newValue ? "dark" : "light");
      return newValue;
    });
  };

  if (!isDarkMode) return null;

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
