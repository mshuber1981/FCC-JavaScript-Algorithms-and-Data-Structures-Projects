import React from "react";
import { useAppContext } from "./appContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import GlobalStyles from "./components/GlobalStyles";
import { NavBar } from "./components/globalStyledComponents";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import Palindrome from "./pages/Palindrome";
import RomanNumerals from "./pages/RomanNumerals";
import CaesarsCipher from "./pages/CaesarsCipher";
import ValidPhoneNumber from "./pages/ValidPhoneNumber";
import CashRegister from "./pages/CashRegister";
import NotFound from "./pages/NotFound";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: "#45413C",
    background: "#F5F2E8",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};

export default function App() {
  const { theme, setTheme } = useAppContext();

  React.useEffect(
    function () {
      const updateTheme = () =>
        darkMode ? setTheme("dark") : setTheme("light");
      updateTheme();
    },
    [setTheme]
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  return (
    <HashRouter>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Palindrome-Checker" element={<Palindrome />} />
          <Route path="/Roman-Numeral-Converter" element={<RomanNumerals />} />
          <Route path="/Caesars-Cipher" element={<CaesarsCipher />} />
          <Route
            path="/Telephone-Number-Validator"
            element={<ValidPhoneNumber />}
          />
          <Route path="/Cash-Register" element={<CashRegister />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
}
