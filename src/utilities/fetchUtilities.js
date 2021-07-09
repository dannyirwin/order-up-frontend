//const baseUrl = 'https://hidden-shelf-20440.herokuapp.com/';
const baseUrl = 'http://localhost:3000/';
const gamesUrl = baseUrl + '/games/';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

const getAllGamesFromDB = async () => {
  const resp = await fetch(gamesUrl);
  return await resp.json();
};

const getGameFromDB = async id => {
  const resp = await fetch(gamesUrl + id);
  return await resp.json();
};

const updateDB = async (body, id) => {
  const options = {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify(body)
  };
  const resp = await fetch(gamesUrl + id, options);
  return await resp.json();
};

export { getAllGamesFromDB, getGameFromDB, updateDB };
