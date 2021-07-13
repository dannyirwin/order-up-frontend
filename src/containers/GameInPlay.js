import { useEffect, useState } from 'react';

import { updateGameToDB } from '../utilities/fetchUtilities';

import SetCard from '../components/SetCard';
import GameStats from '../components/GameStats';
import GameChat from '../components/GameChat';

export default function GameInPlay({ game, user, setAlert, setUser }) {
  const { board, id } = game;
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
        cards: [selectedCards[0], selectedCards[1], selectedCards[2]],
        user_id: user.id
      };
      updateGameToDB(body, id).then(respData => {
        if (respData?.user) {
          setUser(respData.user);
        }
      });
      setSelectedCards([]);
    }
  };

  useEffect(() => {
    updateSetWithDB();
  }, [selectedCards]);

  return (
    <div className='GameInPlay'>
      <GameStats game={game} user={user} />
      <div className='game-cards-container'>{showBoardCards()}</div>
      <GameChat messages={game?.messages} gameId={game.id} userId={user.id} />
    </div>
  );
}
