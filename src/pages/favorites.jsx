import React from "react";
import Navbar from "../layout/navbar";
import { mygame } from "../games";  //hent ut fra games
import GameCard from "../components/GameCard";   //gamecard fra component

export default function favorites() {  /*   navbar til favorittene og favorittspill*/ 
  return (
    <>
      <>
        <Navbar />
        <div className="container">
          <div className="gameshop-heding">
            <h1>My Favorites Game </h1>
          </div>
          <div class="grid-container">
            <div class="grid-item">
              {mygame
                .filter((v) => v.fav)
                .map((game) => (
                  <GameCard game={game} isFav />
                ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
