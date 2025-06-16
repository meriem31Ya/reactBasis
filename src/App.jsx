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
import { AuthContext } from "./contexts/auth.context";
import useLogicApp from "./hooks/useLogicApp";
import Users from "./pages/Users";
import Annonces from "./pages/Annonces";
import LayoutDashboard from "./pages/LayoutDashboard";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import PublicRoute from "./pages/PublicRoute";

const App = () => {
  const [token, user, setToken] = useLogicApp();

  return (
    <AuthContext.Provider value={{ token, user, setToken }}>
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route index element={<Accueil />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id_product" element={<ProductDetail />} />
          </Route>

          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="signup" element={<Signup />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <LayoutDashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path={"userinfos"} element={<Users />} />
            <Route path={"annonces"} element={<Annonces />} />
          </Route>
        </Route>

        {/*  routes  */}
        <Route path="*" element={<p>404 not found </p>} />
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
