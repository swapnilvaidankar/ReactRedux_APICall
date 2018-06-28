export default function(state = {}, action) {
  console.log("reducer GETALL_SUCCESS-----", action.users);
  console.log("reducer GETALL_SUCCESS-----", action.type);
  switch (action.type) {
    case "GETALL_SUCCESS":
      return {
        items: action.users
      };
    default:
      return state;
  }
}
