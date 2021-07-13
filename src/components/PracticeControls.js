import React from 'react';

export default function PracticeControls({ goBack, handleHowToPlay }) {
  return (
    <div className='PracticeControls'>
      <button onClick={handleHowToPlay}>How do I play?</button>
      <button onClick={goBack}>Back to Main Menu</button>
    </div>
  );
}
