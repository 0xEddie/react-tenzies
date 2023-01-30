import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import './App.css';
import Dice from './components/Dice';

function App() {
  // initialize dice array
  const diceInit = [];
  for (let i = 0; i < 10; i++) {
    diceInit.push({
      id: nanoid(),
      value: randomRoll(),
      locked: false,
    });
  }

  const [dice, setDice] = useState(diceInit);
  console.log(dice);

  // return a value from 1 to 6
  function randomRoll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // TODO pass into Dice
  function toggleLock(dieId) {
    console.log(`locking die #${dieId}`);
  }

  // TODO implement state update
  function rollDice() {
    console.log('rolling!');
    // if die is not 'locked', then roll a new value
    // setState(oldDice =>)
  }

  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <Dice dice={dice} />
      <button onClick={rollDice} type="button">
        Roll
      </button>
    </main>
  );
}
export default App;
