import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import './App.css';
import Dice from './components/Dice';

function App() {
  const [dice, setDice] = useState(diceInit());
  const [gameWon, setGameWon] = useState(false);
  
  function diceInit() {
    const initialDice = [];
    for (let i = 0; i < 10; i++) {
      initialDice.push({
        id: nanoid(),
        value: randomRoll(),
        locked: false,
      });
    }
    return initialDice;
  }

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
  
  useEffect(() => {
    // check if all dice match values
    const val = dice[0].value;
    let winCheck = true
    for (let i = 1; i < dice.length; i++) {
      if (val !== dice[i].value) {
        winCheck = false;
        break
      }
    }
    // winCheck === gameWon ? null : setGameWon(winCheck)
    winCheck === gameWon ? null : console.log('game win!');
  }, [dice])

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
