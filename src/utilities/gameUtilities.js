const generateDeck = () => {
  const deck = [];
  let id = 1;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          deck.push({
            shape: i,
            color: j,
            count: k,
            fill: l,
            id: id
          });
          id++;
        }
      }
    }
  }
  return deck;
};

const shuffleDeck = deck => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

const checkIsSet = cards => {
  const attributes = ['color', 'shape', 'fill', 'count'];

  for (let i in attributes) {
    const atr = attributes[i];
    const values = cards.map(card => card[atr]);
    const isAllSame = new Set(values).size === 1;
    const isAllUnique = new Set(values).size === values.length;
    if (!isAllSame(values) && !isAllUnique(values)) {
      return false;
    }
  }
  return true;
};

const gameProgress = game => {
  return Math.floor((1 - (game.board.length + game.deckLength) / 81) * 100);
};

export { generateDeck, shuffleDeck, checkIsSet, gameProgress };
