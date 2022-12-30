import React from "react";
import { useAppContext } from "./appContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import GlobalStyles from "./components/GlobalStyles";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
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
const navLinks = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Palindrome Checker",
    route: "/Palindrome-Checker",
  },
  {
    id: 3,
    name: "Roman Numeral Converter",
    route: "/Roman-Numeral-Converter",
  },
  {
    id: 4,
    name: "Caesars Cipher",
    route: "/Caesars-Cipher",
  },
  {
    id: 5,
    name: "Telephone Number Validator",
    route: "/Telephone-Number-Validator",
  },
  {
    id: 6,
    name: "Cash Register",
    route: "/Cash-Register",
  },
];

export default function App() {
  const { theme, setTheme } = useAppContext();

  React.useEffect(() => {
    const updateTheme = () => (darkMode ? setTheme("dark") : setTheme("light"));
    updateTheme();
  }, [setTheme]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  return (
    <HashRouter>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <NavBar navLinks={navLinks} />
        <main>
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Palindrome-Checker" element={<Palindrome />} />
              <Route
                path="/Roman-Numeral-Converter"
                element={<RomanNumerals />}
              />
              <Route path="/Caesars-Cipher" element={<CaesarsCipher />} />
              <Route
                path="/Telephone-Number-Validator"
                element={<ValidPhoneNumber />}
              />
              <Route path="/Cash-Register" element={<CashRegister />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
}
