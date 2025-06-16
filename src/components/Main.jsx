import React from "react";

const Main = () => {
  return (
    <main className="flex-1 p-6">
      <h2 className="text-3xl font-semibold mb-6">Tableau de bord</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-medium">Users</h3>
          <p className="text-2xl font-bold text-blue-600">150</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-medium">Annonces</h3>
          <p className="text-2xl font-bold text-green-600">87</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
