import React from "react";         
import Navbar from "../layout/navbar";
import { store } from "../games";   //games.js 
import GameCard from "../components/GameCard";  //importer gamecard fra components. 
   
export default function gameshop() {   /*function gameshop til spillbibliotek*/  
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="gameshop-heding">
          <h1>GAMESHOP</h1>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            {store.map((game) => (
              <GameCard game={game} isFav />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
