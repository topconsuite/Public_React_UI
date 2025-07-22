import { atom, useAtom } from "../libraries/jotai";

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    gray: string;
    grayText: string;
    scrollBar: string;
    text: string;
    navBarIcons: string;
    success: string;
    error: string;
    warning: string;
  };
}

const lightTheme: Theme = {
  colors: {
    primary: "#002951",
    secondary: "#dc004e",
    tertiary: "#9c27b0",
    background: "#ffffff",
    gray: "#f5f5f5",
    grayText: "#757575",
    scrollBar: "#c1c1c1",
    text: "#212121",
    navBarIcons: "#424242",
    success: "#4caf50",
    error: "#f44336",
    warning: "#ff9800"
  }
};

const themeAtom = atom<Theme>(lightTheme);

export default function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom);

  return { theme, setTheme };
}
