import React from 'react'

export const IconText = ({icon, text }) => {
  return (
    <div>
      <img style={{ display: !icon ? "none" : "flex" }} src={`images/${icon}.png`} />
        <span>{text}</span>
    </div>
  )
}

export default IconText;