import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  // check preSelected color theme
  let preSelectedMode = false;
  if (localStorage.getItem("color-theme") === "dark") {
    preSelectedMode = true;
  }

  const [isDarkModeEnabled, setDarkMode] = useState(preSelectedMode);

  const toggleColorMode = () => {
    setDarkMode((prevState) => !isDarkModeEnabled);
    if(isDarkModeEnabled) {
      localStorage.setItem("color-theme", "light");
      return;
    }
    localStorage.setItem("color-theme", "dark");
  };

  return (
    <div className={`home-wrapper ${isDarkModeEnabled ? "dark" : ""}`}>
      {/* Navbar section */}
      <Navbar onToggle={toggleColorMode} isDarkModeEnabled={isDarkModeEnabled} />

      <Home/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
