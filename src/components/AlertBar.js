import React from 'react';

export default function AlertBar({ alerts }) {
  const showAlerts = () => {
    return alerts.map((alert, i) => {
      return (
        <p className='alert-message' key={i}>
          {alert}
        </p>
      );
    });
  };
  return <div className='AlertBar'>{showAlerts()}</div>;
}
