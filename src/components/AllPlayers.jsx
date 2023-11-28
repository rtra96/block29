import React from "react";
import {useEffect, useState} from 'react'
import { fetchPlayers } from "../API";
import { useNavigate } from "react-router-dom";
import newPlayerForm from "./NewPlayerForm";

export default function AllPlayers (){
    const [players, setPlayers] =useState([]);
    const navigate = useNavigate ();
    console.log(players);
    
useEffect (() => {
  async function getPlayers () {
    try {
      const nextPlayers = await fetchPlayers();
          setPlayers(nextPlayers);
            }catch (err) {
              console.error(err);
            }
        }
        getPlayers();
    }, [])
    
    const handleAddPlayer = (newPlayer) => {
       setPlayers((prevPlayers) => [prevPlayers, newPlayer]);
    };
    
    
    return (
        <div id="players-container">
            {
                players.map((player, index) => {
                    return (
                        <div className="player-card" key = {index}>
                            <h1>{player.name}</h1>
                            <img src={player.imageUrl} alt={`picture of ${player.name}`} />
                            <button onClick={() => navigate(`/players/${player.id}`)}>See Details</button>
                            <button>Remove From Roster</button>
                        </div>
                    )
                })
            }
        </div>
       
    )
}

