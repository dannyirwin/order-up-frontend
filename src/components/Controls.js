export default function Controls({
  game,
  handleNewGame,
  handleHowToPlay,
  toggleColorblindMode,
  updateDB
}) {
  const add3Cards = () => {
    const body = {
      method: 'add_cards'
    };
    updateDB(body).then(console.log);
  };

  return game?.board ? (
    <div className='Controls'>
      {game.board.length < 15 ? (
        <button onClick={add3Cards}>3 More Cards</button>
      ) : (
        <button disabled> + 3 More Cards</button>
      )}
      <button onClick={handleHowToPlay}>How Do I Play?</button>
      <button onClick={handleNewGame}> New Game </button>
      <button onClick={toggleColorblindMode}>Colorblind Mode</button>
    </div>
  ) : null;
}
