import React from "react";
import "./App.css";
import Box from "./components/box";

function App() {

    const matrix = Array(10).fill().map(() => Array(10).fill().map((i,j) => j));
  return (
    <div className="App">
      {matrix.map((row, index) => (
        <div className="box-row" key={index}>
          {row.map(column => <Box key={column} row={index} column={column}/>)}
        </div>
      ))}
    </div>
  );
}

export default App;
