import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import './App.css';
import Dice from './components/Dice';

function App() {
  const [dice, setDice] = useState(diceInit());
  const [tenzies, setTenzies] = useState(false);
  const {width, height} = useWindowSize();
  
  // return array of 10 randomized dice objects
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
    if (tenzies) {
      setDice(diceInit)
      setTenzies(false)
    } else (
      setDice(oldDice => oldDice.map(
        die => ({
          ...die,
          value: die.locked ? die.value : randomRoll()
        })
      ))
    )
  }
  
  // win game if all dice match values, and all dice are locked
  useEffect(() => {
    const allLocked = dice.every(die => die.locked === true)
    const val = dice[0].value;
    const allSameValue = dice.every(die => die.value === val)
    allLocked && allSameValue ? setTenzies(true) : null
  }, [dice])

  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same.
        <br />
        Click each die to freeze it at its current value between rolls.
        <br />
        Lock all dice to the same value to win!
      </p>
      <Dice dice={dice} toggleLock={toggleLock} />
      <button className="button--roll" onClick={rollDice} type="button">
        {tenzies ? '🔄 New game' : '🎲 Roll'}
      </button>
      {tenzies ? <Confetti width={width} height={height} /> : null}
    </main>
  );
}

export default App;
