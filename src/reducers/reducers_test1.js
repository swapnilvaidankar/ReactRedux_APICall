export default function(state = null, action) {
  console.log("getAll", action);
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    handleResponse => handleResponse.json()
  );
}
