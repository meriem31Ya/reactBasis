import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // recuperer les données du formulaire.
    // faire un appel API
    try {
      const response = await fetch(
        "http://31.97.154.145:3000/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data?.success) {
        toast.success(data?.message || "Inscription réussie");
        setFormData({ username: "", email: "", password: "" });
        navigate("/login");
        return;
      }
      toast.error(data?.message || "Une erreur s'est produite");
    } catch (error) {
      toast.error(error || "Une erreur s'est produite");
    }
    return;
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
      <h2 className="text-2xl font-bold mb-4">Inscription</h2>
      <form action="" onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          required
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
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
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Signup;
