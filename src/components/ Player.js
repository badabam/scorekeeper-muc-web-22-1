import './Player.css';

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <section className="Player">
      <span className="Player__name">{name}</span>
      <button onClick={onDecrement}>-</button>
      <span className="Player__score">{score}</span>
      <button onClick={onIncrement}>+</button>
    </section>
  );
}
