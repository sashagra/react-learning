import React from 'react';

const Counter = ({ counter = 0 }) => (
  <h1>{`Counter Component. Counter value is: ${counter}`}</h1>
)

export default Counter