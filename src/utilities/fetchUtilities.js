//const baseUrl = 'https://hidden-shelf-20440.herokuapp.com/';
const baseUrl = 'http://localhost:3000/';
const gamesUrl = baseUrl + '/games/';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

const getAllGamesFromDB = async () => {
  const response = await fetch(gamesUrl);
  return response.json();
};

const getGameFromDB = async id => {
  const response = await fetch(gamesUrl + id);
  return response.json();
};

const updateDB = async (body, id) => {
  const options = {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify(body)
  };
  const response = await fetch(gamesUrl + id, options);
  return response.json();
};

const postNewGameToDB = async (isPrivate = false) => {
  const body = { private: isPrivate };
  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  };
  const response = await fetch(gamesUrl, options);
  return response.json();
};

export { getAllGamesFromDB, getGameFromDB, updateDB, postNewGameToDB };
