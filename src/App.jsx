import { useEffect, useState } from 'react';
import './App.css';
import Dice from './components/Dice';

function App() {
  const numOfDice = 10;
  const [dice, setDice] = useState(() => {
    const diceArray = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numOfDice; i++) {
      diceArray.push({
        value: randomRoll(),
        locked: false,
      });
    }
    return diceArray;
  });

  function randomRoll() {
    return Math.floor(Math.random() * 6);
  }

  function rollDice() {
    console.log('rolling!');
  }

  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <Dice />
      <button onClick={rollDice} type="button">
        Roll
      </button>
    </main>
  );
}
export default App;
