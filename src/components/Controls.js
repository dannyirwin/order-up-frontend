import { updateGameToDB } from '../utilities/fetchUtilities';

export default function Controls({
  game,
  setGame,
  toggleColorblindMode,
  handleHowToPlay
}) {
  return game?.board ? (
    <div className='Controls'>
      <button onClick={handleHowToPlay}>How Do I Play?</button>
      <button
        onClick={() => {
          setGame();
        }}
      >
        Leave Game{' '}
      </button>
      <button onClick={toggleColorblindMode}>Colorblind Mode</button>
    </div>
  ) : null;
}
