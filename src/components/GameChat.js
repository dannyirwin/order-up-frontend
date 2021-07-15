import React from 'react';

import { postMessageToDB } from '../utilities/fetchUtilities';

export default function GameChat({ messages, gameId, userId }) {
  const showMessages = () => {
    return messages.map(message => {
      return (
        <div className='message' key={message.id}>
          <p className='message-username'>{message.username}</p>
          <p className='message-content'>{message.content}</p>
        </div>
      );
    });
  };

  const sendMessage = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get('message');
    e.target.reset();
    postMessageToDB(message, userId, gameId);
  };

  return (
    <div className='GameChat card'>
      <p>Game Chat</p>
      <div className='messages-container'>{showMessages()}</div>
      <form className='message-form' onSubmit={sendMessage}>
        <input
          className='message-input'
          type='text'
          name='message'
          maxLength='255'
          required
          placeholder='Type your message'
        ></input>
        <input type='submit' value='Send'></input>
      </form>
    </div>
  );
}
