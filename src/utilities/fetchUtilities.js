//const baseUrl = 'https://hidden-shelf-20440.herokuapp.com/';
const baseUrl = 'http://localhost:3000/';
const gamesUrl = baseUrl + '/games/';
const usersUrl = baseUrl + '/users/';
const messagesUrl = baseUrl + '/messages/';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

const fetchOptions = (body, method) => {
  return {
    method: method,
    headers: headers,
    body: JSON.stringify(body)
  };
};

const getAllGamesFromDB = async () => {
  const response = await fetch(gamesUrl);
  return response.json();
};

const getGameFromDB = async id => {
  const response = await fetch(gamesUrl + id);
  return response.json();
};

const updateGameToDB = async (body, id) => {
  const response = await fetch(gamesUrl + id, fetchOptions(body, 'PATCH'));
  return response.json();
};

const postNewGameToDB = async (isPrivate = false) => {
  const body = { is_private: isPrivate };
  const response = await fetch(gamesUrl, fetchOptions(body, 'POST'));
  return response.json();
};

const postNewUserToDB = async (user, gameId) => {
  const body = {
    user: user
  };
  body.user.game_id = gameId;
  const response = await fetch(usersUrl, fetchOptions(body, 'POST'));
  return response.json();
};

const postMessageToDB = async (content, userId, gameId) => {
  const body = {
    message: { content: content, user_id: userId, game_id: gameId }
  };
  const response = await fetch(messagesUrl, fetchOptions(body, 'POST'));
  return response.json();
};

export {
  getAllGamesFromDB,
  getGameFromDB,
  updateGameToDB,
  postNewGameToDB,
  postNewUserToDB,
  postMessageToDB
};
