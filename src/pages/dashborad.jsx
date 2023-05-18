import React from "react";   
import Navbar from "../layout/navbar";   //importer navbar
import { store, mygame } from "../games";   //spillene fra games filen
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
export default function dashborad() {
  const isFav = mygame.filter((item) => item.fav);   //favoritter
  return (
    <>
      <Navbar />
      {/* hero seksjon */}
      <div className="container">
        <div className="hero-section">
          <div className="game-show-text">
            <h2>Game shop</h2>
            <Link to="/gameshop">
              <button>Visit Shop</button>
            </Link>
          </div>
        </div>
      </div>
      {/* top seksjon   */}
      <div className="container">
        <div className="box-section">
          {store.slice(0, 3).map((game) => (
            <GameCard game={game} />
          ))}
        </div>
      </div>
      {/* game library seksjon, spillbibliotek header  */}   
      <div className="container library">
        <div class="grid-container">
          <div class="grid-item">
            <div className="library-heading">         
              <h2>My Game Library</h2>
            </div>
            <div className="library-content-sec">
              {mygame.slice(0, 4).map((game) => (
                <>
                  <GameCard game={game} isFav />
                </>
              ))}
            </div>
            <Link to="/mygames">
              <button>Go To Library</button>
            </Link>
          </div>
          <div class="grid-item">
            <div className="favourite-heading">
              <h2>My Favourites</h2>
            </div>
            <div className="fav-contect-sec">
              {isFav.slice(0, 2).map((game) => (
                <>
                  <GameCard game={game} isFav />
                </>
              ))}
            </div>
            <Link to="/favorites">
              <button>Go To Favourites</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
