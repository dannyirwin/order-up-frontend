const adjectives = ['Lazy', 'Tryhard', 'Diligent', 'Speedy'];
const nouns = [
  'Queer',
  'Hipster',
  'Barista',
  'Baker',
  'CafeCat',
  'Dishwasher',
  'Hippie',
  'Rat'
];

const generateEmployee = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(Math.random() * 1000);

  return adjective + noun + number;
};

export default generateEmployee;
