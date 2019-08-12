const blocks = (state = { row: null, column: null }, action) => {
  switch (action.type) {
    case "SET_ACTIVE_BLOCK":
      return { row: action.row, column: action.column };
    default:
      return state;
  }
};

export default blocks;
