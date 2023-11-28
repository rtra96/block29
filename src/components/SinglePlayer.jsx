import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../API";
import { useState , useEffect } from "react";
export default function SinglePlayer (){
  const [ player, setPlayer] = useState(null);
  const params = useParams();
  const navigate = useNavigate();  
  useEffect(() => {
    async function getSinglePlayer () {
        try {
            const nextPlayers = await fetchSinglePlayer(params.playerId);

        } catch (error) {
            console.error(err);
        }
    }
        getSinglePlayer();
}, []);
  return ( player &&
    <div id="single-player">
        <h3>{player.name}</h3>
        <p>ID #{player.id}</p>
        <p>{player.breed}</p>
        <p>Status: {player.status}</p>
        <img src={player.imageUrl} alt={`picture of ${player.name}`} />
        <button onClick={() => {navigate("/")}}>Back to All Players</button>
    </div>
  )
}