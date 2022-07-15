import React from 'react'

function CentralTruth({item}) {
  return (
    <div className="container">
      <span className="text">Central Truth: </span>
      <span className="text-letter text-white font-italic ">
        {" "}
        {item.central_truth}
      </span>
    </div>
  );
}

export default CentralTruth