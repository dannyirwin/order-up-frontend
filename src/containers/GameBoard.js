import { useState, useEffect } from 'react';

import SetCard from '../components/SetCard';

export default function GameBoard({ boardCards, updateDB }) {
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
    return boardCards.map(card => {
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

  const handleSelectedCards = () => {
    if (selectedCards.length >= 3) {
      const body = {
        cards: [selectedCards[0], selectedCards[1], selectedCards[2]]
      };
      updateDB(body).then(console.log);
    }
  };

  useEffect(() => {
    if (selectedCards.length >= 3) {
      handleSelectedCards();
    }
  }, [selectedCards]);

  return <div className='GameBoard'>{showBoardCards()}</div>;
}
