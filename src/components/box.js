import React from "react";
import { connect } from "react-redux";
import { setActiveBlock } from "../actions";

const mapStateToProps = state => ({
  activeBlock: state.blocks
})

const isBoxActive = (row, column, activeRow, activeColumn) => {
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

const Box = (props) => (
    <div className = {`box ${isBoxActive(props.row, props.column, props.activeBlock.row, props.activeBlock.column) ? 'active' : ''}`} onClick={() => { props.dispatch(setActiveBlock(props.row, props.column))}}>
        <p> row {props.row}</p>
        <p> column {props.column}</p>
    </div>
);

export default connect(mapStateToProps)(Box);