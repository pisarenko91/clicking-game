import { combineReducers } from "redux";
import blocks from "./blocks";
import nextBlock from "./nextBlock";

export default combineReducers({
  blocks,
  nextBlock
});
