import { useState } from 'react';

function Dice() {
  return (
    <div className="dice">
      <p>dice</p>
    </div>
  );
}

function Die() {
  const number = 3;
  return <div className="die">{number}</div>;
}

export default Dice;
