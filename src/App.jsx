import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LayoutApp from "./pages/LayoutApp";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Product from "./pages/ProductDetail";
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<Accueil />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id_product" element={<ProductDetail />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/*  routes  */}
      <Route path="*" element={<p>404 not found </p>} />
    </Routes>
  );
};

export default App;
