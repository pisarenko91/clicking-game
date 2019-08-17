import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Box from "./components/box";

const mapStateToProps = state => ({
  activeBlock: state.blocks
  //nextBlock: state.nextBlock
});

export const isBoxActive = (row, column, activeRow, activeColumn) => {
  if (activeRow === null || activeColumn === null) {
    return false;
  }
  if (
    (row === activeRow && column === activeColumn) ||
    (row === activeRow && Math.abs(column - activeColumn) === 3) ||
    (column === activeColumn && Math.abs(row - activeRow) === 3) ||
    (Math.abs(row - activeRow) === 2 && Math.abs(column - activeColumn) === 2)
  ) {
    return true;
  }
};

/*
const isBoxInLevel = (level, box) =>
  !!level.find(
    levelBox => levelBox.row === box.row && levelBox.column === box.column
  );

export const generateLevel = (row, column, levelNum) => {
  const level = [{ row, column }];
  let lastBox;
  while (level.length < levelNum) {
    const randomNum = Math.floor(Math.random() * 8) + 1;
    lastBox = level[level.length - 1];
    switch (randomNum) {
      case 1:
        if (
          lastBox.row + 3 > 8 ||
          isBoxInLevel(level, { column: lastBox.column, row: lastBox.row + 3 })
        ) {
          continue;
        }
        level.push({ row: lastBox.row + 3, column: lastBox.column });
        break;
      case 2:
        if (
          lastBox.row - 3 < 0 ||
          isBoxInLevel(level, { column: lastBox.column, row: lastBox.row - 3 })
        ) {
          continue;
        }
        level.push({ row: lastBox.row - 3, column: lastBox.column });
        break;
      case 3:
        if (
          lastBox.column + 3 > 8 ||
          isBoxInLevel(level, { column: lastBox.column + 3, row: lastBox.row })
        ) {
          continue;
        }
        level.push({ row: lastBox.row, column: lastBox.column + 3 });
        break;
      case 4:
        if (
          lastBox.column - 3 < 0 ||
          isBoxInLevel(level, { column: lastBox.column - 3, row: lastBox.row })
        ) {
          continue;
        }
        level.push({ row: lastBox.row, column: lastBox.column - 3 });
        break;
      case 5:
        if (
          lastBox.column + 2 > 8 ||
          lastBox.row + 2 > 8 ||
          isBoxInLevel(level, {
            column: lastBox.column + 2,
            row: lastBox.row + 2
          })
        ) {
          continue;
        }
        level.push({ row: lastBox.row + 2, column: lastBox.column + 2 });
        break;
      case 6:
        if (
          lastBox.column - 2 < 0 ||
          lastBox.row + 2 > 8 ||
          isBoxInLevel(level, {
            column: lastBox.column - 2,
            row: lastBox.row + 2
          })
        ) {
          continue;
        }
        level.push({ row: lastBox.row + 2, column: lastBox.column - 2 });
        break;
      case 7:
        if (
          lastBox.column - 2 < 0 ||
          lastBox.row - 2 < 0 ||
          isBoxInLevel(level, {
            column: lastBox.column - 2,
            row: lastBox.row - 2
          })
        ) {
          continue;
        }
        level.push({ row: lastBox.row - 2, column: lastBox.column - 2 });
        break;
      case 8:
        if (
          lastBox.column + 2 > 8 ||
          lastBox.row - 2 < 0 ||
          isBoxInLevel(level, {
            column: lastBox.column + 2,
            row: lastBox.row - 2
          })
        ) {
          continue;
        }
        level.push({ row: lastBox.row - 2, column: lastBox.column + 2 });
        break;
      default:
        break;
    }
  }
    return level;
};

*/

function App() {
  const matrix = Array(10)
    .fill()
    .map(() =>
      Array(10)
        .fill()
        .map((i, j) => j)
    );
  return (
    <div className="App">
      {matrix.map((row, index) => (
        <div className="box-row" key={index}>
          {row.map(column => (
            <Box key={column} row={index} column={column} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default connect(mapStateToProps)(App);
