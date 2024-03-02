import React from 'react';

export const MainHighlight = ({ keyHighlights }) => {
  return (
    <div className='highlight-keys'>
      {keyHighlights.map((item, index) => (
        <div key={index} >
          <span className='key-rating'>{item.rating}</span>
          <span className='keys'>{item.highlight}</span>
        </div>
      ))}
    </div>
  );
};

export default MainHighlight;
