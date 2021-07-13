import React from 'react';

export default function MainCardPractice({ setCurrentPage }) {
  return (
    <div className='menu-card card'>
      <button onClick={setCurrentPage}>Practice</button>
      <hr></hr>
      <p>
        Slow down for a minute and practice by yourself with a never-ending
        deck!
      </p>
    </div>
  );
}
