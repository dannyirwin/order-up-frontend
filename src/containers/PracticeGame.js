import { useEffect, useState } from 'react';
import { CodeWorking } from 'react-ionicons';
import SetCard from '../components/SetCard';

import { generateDeck, shuffleDeck } from '../utilities/gameUtilities';

export default function PracticeGame() {
  const [deck, setDeck] = useState(shuffleDeck(generateDeck()));
  const [cardsToShow, setCardsToShow] = useState(12);
  const [discardPile, setDiscardPile] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [points, setPoints] = useState(0);

  const showCards = () => {
    if (deck) {
      const boardCards = deck.slice(0, cardsToShow);
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
    }
  };

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

  const handleAdd3Cards = () => {
    if (cardsToShow === 15) {
      setCardsToShow(12);
    } else {
      setCardsToShow(15);
    }
  };

  const showAdd3Button = () => {
    if (cardsToShow === 12) {
      return <button onClick={handleAdd3Cards}>+ 3 More Cards</button>;
    }
    return <button disabled>+ 3 More Cards</button>;
  };

  return (
    <div className='PracticeGame'>
      <div className='game-controls'>
        {showAdd3Button()}
        <div className='points-display card'>
          Orders Completed:
          <h3>{points}</h3>
        </div>
      </div>

      <div className='game-cards-container'> {showCards()} </div>
    </div>
  );
}
