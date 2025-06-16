import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { AuthContext } from "../contexts/auth.context";
import { ROLES } from "../constants";

const Login = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success) {
        const role = data.user.role;
        setToken(data?.accessToken);
        localStorage.setItem("access_token", data?.accessToken);
        localStorage.setItem("user", JSON.stringify(data?.user));
        toast.success("Connexion réussie");

        if (role === ROLES.admin) {
          return navigate("/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      return console.log({ error });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData, // garder les autres
      [e.target.name]: e.target.value,
    });
    return;
  };

  return (
    <div className=" mt-16 max-w-md mx-auto pt-6 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Connexion</h2>
      <form action="" onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          required
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          required
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
