import React from "react";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="bg-secondary">
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
