import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/*  routes  */}
      <Route path="*" element={<p>404 not found </p>} />
    </Routes>
  );
};

export default App;
