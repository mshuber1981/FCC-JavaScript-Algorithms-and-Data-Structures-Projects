import React from "react";
import { useAppContext } from "./appContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
import { NavBar } from "./components/globalStyledComponents";
// Pages
import Home from "./pages/Home";
import Palindrome from "./pages/Palindrome";

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
      <ScrollToTop />
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Palindrome-Checker" element={<Palindrome />} />
          {/* <Route path="/Route1" element={<Route1 />} />
            <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}
