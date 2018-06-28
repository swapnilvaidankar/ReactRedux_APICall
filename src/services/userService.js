export const userService = {
  getAll
};
function getAll() {
  console.log("Service getAll");
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    handleResponse
  );
}
function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (data) {
      return data;
    }
  });
}
