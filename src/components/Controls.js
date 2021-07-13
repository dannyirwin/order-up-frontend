import { updateGameToDB } from '../utilities/fetchUtilities';

export default function Controls({
  game,
  setGame,
  toggleColorblindMode,
  handleHowToPlay
}) {
  const add3Cards = () => {
    const body = {
      method: 'add_cards'
    };
    updateGameToDB(body, game.id);
  };

  return game?.board ? (
    <div className='Controls'>
      <button onClick={handleHowToPlay}>How Do I Play?</button>
      {game.board.length < 15 && game.deckLength !== 0 ? (
        <button onClick={add3Cards}>3 More Cards</button>
      ) : (
        <button disabled> + 3 More Cards</button>
      )}
      <button
        onClick={() => {
          setGame();
        }}
      >
        {' '}
        Leave Game{' '}
      </button>
      <button onClick={toggleColorblindMode}>Colorblind Mode</button>
    </div>
  ) : null;
}
