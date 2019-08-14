import React from "react";
import { connect } from "react-redux";
import { setActiveBlock } from "../actions";
import { setNextBlock } from "../actions";

const mapStateToProps = state => ({
  activeBlock: state.blocks,
  nextBlock: state.nextBlock
});

const isBoxActive = (row, column, activeRow, activeColumn) => {
  if (activeRow === null || activeColumn === null) {
    return false;
  }
  if (
    row === activeRow &&
    column ===
      activeColumn /*||
    (row === activeRow && Math.abs(column - activeColumn) === 3) ||
    (column === activeColumn && Math.abs(row - activeRow) === 3) ||
    (Math.abs(row - activeRow) === 2 && Math.abs(column - activeColumn) === 2) */
  ) {
    return true;
  }
};

//const level = {};

const generateLevel = (activeColumn, activeRow) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let nextCube = {};

  let currentCube = {
    currentColumn: activeColumn,
    currentRow: activeRow
  };

  switch (getRandomInt(1, 8)) {
    case 1:
      nextCube.column = currentCube.currentColumn;
      nextCube.row = currentCube.row - 3;
      break;
    case 2:
      nextCube.column = currentCube.currentColumn;
      nextCube.row = currentCube.currentRow + 3;
      break;
    case 3:
      nextCube.column = currentCube.currentColumn - 3;
      nextCube.row = currentCube.currentRow;
      break;
    case 4:
      nextCube.column = currentCube.currentColumn + 3;
      nextCube.row = currentCube.currentRow;
      break;
    case 5:
      nextCube.column = currentCube.currentColumn + 2;
      nextCube.row = currentCube.currentRow - 2;
      break;
    case 6:
      nextCube.column = currentCube.currentColumn - 2;
      nextCube.row = currentCube.currentRow - 2;
      break;
    case 7:
      nextCube.column = currentCube.currentColumn + 2;
      nextCube.row = currentCube.currentRow + 2;
      break;
    case 8:
      nextCube.column = currentCube.currentColumn - 2;
      nextCube.row = currentCube.currentRow + 2;
      break;
    default:
      nextCube.column = currentCube.currentColumn;
      nextCube.row = currentCube.row;
  }

  return nextCube;
};

generateLevel();

const Box = (props, nextCube) => (
  <div
    className={`box ${
      isBoxActive(
        props.row,
        props.column,
        props.activeBlock.row,
        props.activeBlock.column
      )
        ? "active"
        : ""
    }`}
    onClick={() => {
      props.dispatch(setActiveBlock(props.row, props.column));
      //props.dispatch(setActiveBlock(props.nextCube.row, props.nextCube.column));
    }}
  >
    <p> row {props.row}</p>
    <p> column {props.column}</p>
    <p> nextRow {nextCube.row}</p>
    <p> nextColumn {nextCube.column}</p>
  </div>
);

export default connect(mapStateToProps)(Box);
