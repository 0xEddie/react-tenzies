import { nanoid } from 'nanoid';
import { useState } from 'react';
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

  // return a value from 1 to 6
  function randomRoll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // when a die is clicked, toggle its 'locked' property
  function toggleLock(e, dieId) {
    // map over dice array, update 'locked' if 'dieId' matches current 'die.id'
    setDice(oldDice => oldDice.map(
      die => ({
        ...die,
        locked: dieId === die.id ? !die.locked : die.locked
      })
    ))
  }

  // dice array state update: if die is not 'locked', then roll a new value
  function rollDice() {
    setDice(oldDice => oldDice.map(
      die => ({
        ...die,
        value: die.locked ? die.value : randomRoll()
      })
    ))
  }

  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same.<br />Click each die to freeze it at its
        current value between rolls.
      </p>
      <Dice dice={dice} toggleLock={toggleLock} />
      <button className="button--roll" onClick={rollDice} type="button">
        Roll
      </button>
    </main>
  );
}

export default App;
