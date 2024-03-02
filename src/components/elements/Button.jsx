import React from 'react';

export const Button = (props) => {
  return (
    <button className='btn' style={{ width: props.width }}>{props.text}</button>
  );
};

export default Button;
