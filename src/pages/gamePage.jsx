import React from "react";
import { mygame } from "../games";   //fra games filen
import { useParams } from "react-router-dom";      //parametere
import { Link } from "react-router-dom";   
export default function GamePage() {   /*  slug filen hent ut Params function */
  const { game: slug } = useParams();

  const game = mygame.find((v) => v.slug === slug);   //mine spill fra slug

  return (
    <div className="container"> 
      {/* <h1>*/ }
      <div className="card">
        <div className="img-card">
          <img src={game.img} alt="" />
          
        </div>
        <div className="card-text">
          <h1>{game.title}</h1>
          <p>Released Date :{game.released}</p>
          <p>{game.genres.join(", ")}</p>
          <Link to={game.link} target="blank">
            <button>Buy Now</button>
          </Link>
          {game?.fav && (
            <p className="fav">
              Favorite <span class="material-symbols-outlined">favorite</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
