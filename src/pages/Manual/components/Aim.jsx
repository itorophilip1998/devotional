import React from 'react'

function Aim({item}) {
  return (
    <div className="container">
      <span className="text text-warning">Aim: </span>
      <span className="text-letter text-white font-italic "> {item.aim}</span>
    </div>
  );
}

export default Aim