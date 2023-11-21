import React from "react";
import {Link} from 'react-router-dom';
function NavBar(){
    return(
        <>
          <nav>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "./components/AllPlayers.jsx">All Players</Link></li>
                <li><Link to = "./components/NewPlayerForm.jsx">Add a New Player</Link></li>
            </ul>
          </nav>
        </>
    );
}

export default NavBar;