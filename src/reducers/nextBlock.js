const nextBlock = (state = { row: null, column: null }, action) => {
  switch (action.type) {
    case "SET_NEXT_BLOCK":
      return { row: action.row, column: action.column };
    default:
      return state;
  }
};

export default nextBlock;
