function Dice({ dice, toggleLock }) {
  const dieElems = dice.map( die =>
    <Die 
      key={die.id}
      die={die}
      toggleLock={toggleLock}
    />
    )
  return (
    <div className="dice-container">
      {dieElems}
    </div>
  );
}

function Die({ die, toggleLock }) {
  return (
    <button 
      type='button' 
      className="button--die" 
      onClick={(e) => toggleLock(e, die.id)} 
    >
      {die.value}
    </button>
  )}

export default Dice;
