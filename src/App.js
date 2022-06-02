import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import data from "./data";

export default function App() {
  const listOfCards = data.map((CardsData) => {
    return <Cards items={CardsData} />;
  });
  console.log(listOfCards);
  return (
    <main>
      <Navbar />
      <div className="list-cards">{listOfCards}</div>
    </main>
  );
}
