"use client";

import { createContext, useState } from "react";

type darkMode = {
    isLightTheme: null | boolean,
    light: null | {
        bgColor: string,
        textColor: string
    },
    dark: null | {
        bgColor: string,
        textColor: string
    },
    toggleTheme: null | (() => void),
}

const defaultValue: darkMode = {
  isLightTheme: null,
  light: null,
  dark: null,
  toggleTheme: null,
}

export const ThemeContext = createContext(defaultValue);

export default function ThemeContextProvider(props: any) {
const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  const [light, setLight] = useState({
    bgColor: "#FFFFFF",
    textColor: "#000000",
  });

  const [dark, setDark] = useState({
    bgColor: "#000000",
    textColor: "#FFFFFF",
  });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme: isLightTheme,
        light: light,
        dark: dark,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}