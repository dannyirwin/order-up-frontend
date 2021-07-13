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
  console.log(deck);
  return deck;
};

export { generateDeck, shuffleDeck };
