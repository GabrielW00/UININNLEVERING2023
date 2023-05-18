import React from "react";  
import { Link, useNavigate } from "react-router-dom";

export default function GameCard({ game, isFav }) {
  const navigate = useNavigate();
  return (
    <div>          
      {" "}    
      <div className="box" key={game.id}>     {/*box med spillene, game id*/}
        <div
          className="img-box"
          onClick={() => isFav && navigate(`/game/${game.slug}`)}  //gamefavoritter
        >
          <img src={game.img} alt="" width={150} height={150} />
        </div>
        <div className="box-text">
          <h5>{game.title}</h5>
          <h6>{game.genres.join(", ")}</h6> 
          {!isFav && (
            <Link to={game.link} target="blank">
              <button>Buy</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
