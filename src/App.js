import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import data from "./data";

export default function App() {
  const listaOfCards = data.map((locationData) => {
    <Cards items={locationData} />;
  });

  return (
    <main>
      <Navbar />
      {listaOfCards}
    </main>
  );
}
