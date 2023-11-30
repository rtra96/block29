import React, { useState } from 'react';
import { addPlayer } from '../API';



const NewPlayerForm = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !breed) {
      alert('Please fill the name and age fields');
      return;
    }

    const newPlayer = {
      name,
      breed 
    };
    await addPlayer (newPlayer);
    setName('');
    setBreed('');
  };
 
  return (
    
      <form className='formstylz' onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Player</button>
      </form>
      
   
  );

};

export default NewPlayerForm;