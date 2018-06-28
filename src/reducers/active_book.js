export default function(state = null, action) {
  if (action.type === "SELECT_BOOK") {
    return action.payload;
  }
  return state;
}
