const messages = {
  positive: [
    'You found one!',
    'Good Job!',
    'Good one!',
    "You're on a roll!",
    'You got it!'
  ],
  negative: [
    'Try again',
    '...nope...',
    "That wasn't quite right",
    "You'll get the next one"
  ]
};

const generateAlert = messageType => {
  const random = Math.floor(Math.random() * messages[messageType].length);
  return messages[messageType][random];
};

export default generateAlert;
