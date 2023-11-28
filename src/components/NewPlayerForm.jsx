import React, { useState } from 'react';

const NewPlayerForm = ({ onNewPlayer }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) {
      alert('Please fill the name and age fields');
      return;
    }

    const newPlayer = {
      name,
      age: parseInt(age, 10),
    };
    onNewPlayer(newPlayer);
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
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
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default NewPlayerForm;