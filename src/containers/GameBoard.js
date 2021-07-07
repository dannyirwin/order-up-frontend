import { useState, useEffect } from 'react';

import SetCard from '../components/SetCard';

export default function GameBoard({ boardCards, removeCardsFromGame }) {
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
    console.log(boardCards);
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

  // const handleSelectedCards = () => {
  //   if (selectedCards.length >= 3) {
  //     if (checkIsSet()) {
  //       setTimeout(() => {
  //         removeCardsFromGame(selectedCards);
  //       }, 500);
  //     }
  //     setTimeout(() => setSelectedCards([]), 500);
  //   }
  // };

  // useEffect(() => {
  //   if (selectedCards.length >= 3) {
  //     handleSelectedCards();
  //   }
  // }, [selectedCards]);

  return <div className='GameBoard'>{showBoardCards()}</div>;
}
