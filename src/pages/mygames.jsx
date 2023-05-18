import React from "react";
import Navbar from "../layout/navbar";
import { mygame } from "../games";
import GameCard from "../components/GameCard";

export default function mygames() {   //mine spill function return navigasjon. 
  return (
    <>
      <Navbar />   
      <div className="container">
        <div className="gameshop-heding">
          <h1>My Game Library</h1>
        </div>
        <div class="grid-container">  
          <div class="grid-item">     
            {mygame.map((game) => (     //henter ut gameCard for spill som er favoritter. 
              <GameCard game={game} isFav />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}