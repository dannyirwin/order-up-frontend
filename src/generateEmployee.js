const adjectives = [
  'Lazy',
  'Tryhard',
  'Diligent',
  'Speedy',
  'Bearded',
  'Fancy',
  'Sassy',
  'Bored',
  'Trendy',
  'Tattooed',
  'Flirty',
  'Messy',
  'Aloof',
  'Melancholy'
];
const nouns = [
  'Queer',
  'Hipster',
  'Barista',
  'Baker',
  'CafeCat',
  'Dishwasher',
  'Hippie',
  'Rat',
  'Bohemian',
  'Manager',
  'Lurker',
  'CoffeeAddict'
];

const generateEmployee = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(Math.random() * 1000);

  return adjective + noun + number;
};

export default generateEmployee;
