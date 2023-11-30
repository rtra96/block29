const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT";
export const fetchPlayers = async () => {
  try {
        const rsp = await fetch(`${API_URL}/players`);
        const json = await rsp.json();
        return json.data.players;
    } catch(err) {
        console.error(err);
        
    }
}

export const fetchSinglePlayer = async (playerID) => {
    try {
        const rsp = await fetch(`${API_URL}/players/${playerID}`);
        const json = await rsp.json();
        return json.data.player;
    }catch (err){
        console.log(err);

    }
}


export const addPlayer = async (playerObj) => {
    try {
        const rsp = await fetch(`${API_URL}/players`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(playerObj)
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const deletePlayers = async (playerId) => {
  const url = `${API_URL}/players/${playerId}`; 

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      })
  

    if (!response.ok) {
      throw new Error('Failed to delete player');
    }

 } catch (error) {
    console.error('Error deleting player:', error);
    throw error; 
  }
};
