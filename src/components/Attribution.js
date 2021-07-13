import React from 'react';

export default function Attribution() {
  return (
    <div className='Attribution'>
      <div>
        Site by{' '}
        <a
          href='https://github.com/dannyirwin'
          title='Github'
          target='_blank'
          rel='noreferrer'
        >
          Danny Irwin
        </a>
      </div>
      <div>
        Icons made by{' '}
        <a
          href='https://www.freepik.com'
          title='Freepik'
          target='_blank'
          rel='noreferrer'
        >
          Freepik
        </a>{' '}
        from{' '}
        <a
          href='https://www.flaticon.com/'
          title='Flaticon'
          target='_blank'
          rel='noreferrer'
        >
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
