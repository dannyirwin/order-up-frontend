import React from 'react';

export default function AlertBar({ alert }) {
  return (
    <div className='AlertBar'>
      <p className='alert-message'>{alert}</p>
    </div>
  );
}
