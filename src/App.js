import React from "react";
import BookList from "./containers/Book-list";
import BookDetail from "./containers/Book-detail";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <BookList />
        <BookDetail />
      </div>
    </div>
  );
};

export default App;
