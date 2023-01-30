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
    <div className="dice">
      {dieElems}
    </div>
  );
}

function Die({ die }) {
  console.log('die: ',die);
  return <button type='button' className="die">{die.value}</button>;
}

export default Dice;
