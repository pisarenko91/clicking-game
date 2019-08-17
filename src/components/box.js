import React from "react";
import { connect } from "react-redux";
import { setActiveBlock /*, setNextBlock */ } from "../actions";
//import { isBoxActive } from "../App";
//import { generateLevel } from "../App";

const mapStateToProps = state => ({
  activeBlock: state.blocks
  //nextBlock: state.nextBlock
});

const handleBoxClick = props => {
  props.dispatch(setActiveBlock(props.row, props.column));
  //props.dispatch(generateLevel(props.row, props.column));
};

const Box = props => {
  return (
    <div
      className={`${props.active ? "active" : ""}box`}
      onClick={() => {
        handleBoxClick(props);
      }}
    >
      <p>row {props.row}</p>
      <p>column {props.column}</p>
    </div>
  );
};

export default connect(mapStateToProps)(Box);

/*{`box ${
  isBoxActive(
    props.row,
    props.column,
    props.activeBlock.row,
    props.activeBlock.column
  )
    ? "active"
    : ""
}`}*/
