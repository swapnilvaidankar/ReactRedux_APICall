import { userService } from "../services/userService";

export const userActions = {
  getAll
};
export function selectBook(book) {
  console.log("SELECTBOOK");
  return {
    type: "SELECT_BOOK",
    payload: book
  };
}
export function getAll(dispatch) {
  console.log("Action getAll");
  return dispatch => {
    dispatch(request());

    userService
      .getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: "GETALL_REQUEST" };
  }
  function success(users) {
    console.log("success action ", users);
    return { type: "GETALL_SUCCESS", users };
  }
  function failure(error) {
    return { type: "GETALL_FAILURE", error };
  }
}
