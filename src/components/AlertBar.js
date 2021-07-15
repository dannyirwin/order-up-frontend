import React from 'react';

export default function AlertBar({ alert }) {
  return <div className={`AlertBar ${alert?.className}`}>{alert?.content}</div>;
}
