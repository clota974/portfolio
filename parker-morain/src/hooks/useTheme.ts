import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  color: 'light'
});

export default function useTheme() {
  return useContext(ThemeContext);
}