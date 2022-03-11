import { useState } from 'react';
import Player from './components/Player.js';

function App() {
  const [players, setPlayers] = useState([
    { name: 'Player 1', score: 0, id: '1' },
    { name: 'Player 2', score: 0, id: '2' },
    { name: 'Player 3', score: 0, id: '3' },
    { name: 'Player 4', score: 0, id: '4' },
  ]);

  return (
    <section>
      <h1>Scorekeeper</h1>
      {players.map(({ name, score, id }, index) => (
        <Player
          name={name}
          score={score}
          onDecrement={() => decrementPlayerScore(index)}
          onIncrement={() => incrementPlayerScore(index)}
          key={id}
        />
      ))}
    </section>
  );

  function incrementPlayerScore(index) {
    const player = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decrementPlayerScore(index) {
    const player = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score - 1 },
      ...players.slice(index + 1),
    ]);
  }
}

export default App;
