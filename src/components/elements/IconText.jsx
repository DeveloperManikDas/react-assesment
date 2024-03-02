import React from 'react'

export const IconText = ({icon, text }) => {
  return (
    <div className='icon-text'>
      <img style={{ display: !icon ? "none" : "flex", position: "relative", top: "-2px" }} src={`images/${icon}.png`} />
        <span>{text}</span>
    </div>
  )
}

export default IconText;