import React from 'react'

function MemoryVerse({item}) {
  return (
    <div className="container">
      <span className="text">Memory Verse: </span>
      <span className="text-letter text-white font-italic ">
        {" "}
        {item.memory_verse}
      </span>
    </div>
  );
}

export default MemoryVerse