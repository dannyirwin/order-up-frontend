import { useState, useEffect } from 'react';
import { updateDB } from '../utilities/fetchUtilities';

import SetCard from '../components/SetCard';
import GameLobby from '../components/GameLobby';

export default function GameBoard({ game }) {
  const { board, state, id } = game;
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
      updateDB(body, id);
      setSelectedCards([]);
    }
  };

  const showGameState = () => {
    console.log(state);
    switch (state) {
      case 'Game in progress':
        console.log('starting game');
        return showBoardCards();
      case 'Waiting for Players':
      default:
        return <GameLobby gameId={id} />;
    }
  };

  useEffect(() => {
    updateSetWithDB();
  }, [selectedCards]);

  console.log(game);

  return <div className='GameBoard'>{showGameState()}</div>;
}
