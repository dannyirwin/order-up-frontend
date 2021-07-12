import { useState, useEffect } from 'react';
import { updateGameToDB } from '../utilities/fetchUtilities';

import SetCard from '../components/SetCard';
import GameLobby from '../components/GameLobby';
import GameOver from '../components/GameOver';

const newUser = () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const iconId = Math.floor(Math.random() * 9) + 1;
  return {
    color: randomColor,
    icon_id: iconId
  };
};

export default function GameBoard({ game, setAlert }) {
  const { board, state, id } = game;
  const [user, setUser] = useState(newUser());
  const [selectedCards, setSelectedCards] = useState([]);

  const toggleSelectedCard = card => {
    if (isSelected(card)) {
      setSelectedCards(selectedCards.filter(sCard => sCard.id !== card.id));
    } else {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const isSelected = card => {
    return selectedCards.filter(sCard => sCard.id === card.id).length > 0;
  };

  const showBoardCards = () => {
    return board.map(card => {
      return (
        <SetCard
          card={card}
          key={card.id}
          toggleSelectedCard={toggleSelectedCard}
          isSelected={isSelected(card)}
        />
      );
    });
  };

  const updateSetWithDB = () => {
    if (selectedCards.length >= 3) {
      const body = {
        method: 'check_set',
        cards: [selectedCards[0], selectedCards[1], selectedCards[2]]
      };
      updateGameToDB(body, id);
      setSelectedCards([]);
    }
  };

  const showGame = () => {
    switch (state) {
      case 'Game Over':
        return <GameOver />;
      case 'Game in progress':
        if (!user?.id) {
          return (
            <GameLobby
              game={game}
              user={user}
              setUser={setUser}
              setAlert={setAlert}
            />
          );
        }
        return showBoardCards();
      case 'Waiting for Players':
      default:
        return (
          <GameLobby
            game={game}
            user={user}
            setUser={setUser}
            setAlert={setAlert}
          />
        );
    }
  };

  useEffect(() => {
    updateSetWithDB();
  }, [selectedCards]);

  console.log(game);

  return <div className='GameBoard'>{showGame()}</div>;
}
