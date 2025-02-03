import React from "react";

const Toolbar = ({ eliminate, clear, undo, redo }) => {
  return (
    <div style={{ display: "flex", alignContent: "space-between" }}>
      <button onClick={eliminate}>Eliminate</button>
      <button onClick={clear}>Clear</button>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  )
}

export default Toolbar;