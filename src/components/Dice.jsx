import { useState } from 'react';

function Dice({ dice }) {
  console.log('dice: ', dice);
  const dieElems = dice.map( die =>
    <Die 
      key={die.id}
      die={die}
    />
    )
  return (
    <div className="dice-container">
      {dieElems}
    </div>
  );
}

function Die({ die }) {
  return <button type='button' className="button--die">{die.value}</button>;
}

export default Dice;
