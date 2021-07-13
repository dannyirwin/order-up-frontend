import React from 'react';

export default function MainCardPractice({ togglePracticeMode }) {
  return (
    <div className='menu-card card'>
      <button onClick={togglePracticeMode}>Practice</button>
      <hr></hr>
      <p>
        Slow down for a minute and practice by yourself with a never-ending
        deck!
      </p>
    </div>
  );
}
