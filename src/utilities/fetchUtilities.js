//const baseUrl = 'https://hidden-shelf-20440.herokuapp.com/';
const baseUrl = 'http://localhost:3000/';

const getAllGamesFromDB = () => {
  fetch(baseUrl + 'games').then(res => res.json());
};
const getGameFromDB = id => {
  fetch(baseUrl + 'games/' + id).then(res => res.json());
};

export { getAllGamesFromDB, getGameFromDB };
