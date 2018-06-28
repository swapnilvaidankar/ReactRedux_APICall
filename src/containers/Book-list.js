import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectBook } from "../actions/index";
import { userActions } from "../actions/index";

class BookList extends React.Component {
  componentDidMount() {
    console.log("DidMount");
    this.props.dispatch(userActions.getAll());
  }
  renderUsers() {
    console.log("Outside if items---", this.props.items.items);
    if (this.props.items.items !== undefined) {
      console.log("in side if items---", this.props.items.items);
      const userList = this.props.items.items;
      // console.log("UserList --->", userList);
      return userList.map(item1 => <li key={item1.userId}>{item1.title}</li>);
    } else {
      console.log("in side else");
    }
    // return userListLoop;
    // return userList.items.map(item => (
    //   <li
    //     key={item.userId}
    //     // onClick={() => this.props.dispatch(selectBook(book))}
    //     className="booklist"
    //   >
    //     {item.title}
    //   </li>
    // ));
  }
  renderList() {
    // console.log("items---", this.props.items.items);
    // console.log("books---", this.props.books);

    return this.props.books.map(book => (
      <li
        key={book.title}
        onClick={() => this.props.dispatch(selectBook(book))}
        className="booklist"
      >
        {book.title}
      </li>
    ));
    // return <li>BookList</li>;
  }
  render() {
    console.log("in render items---", this.props.items.items);
    return (
      <div className="col-sm-4">
        <h6 className="text-center">List of Books</h6>
        <ul>{this.renderList()}</ul>
        <h6 className="text-center">List of Books</h6>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    books: state.books,
    activeBook: state.activeBook,
    items: state.testReducer
  };
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectBook: selectBook }, dispatch);
//   // return onClick: id => dispatch(selectBook)
// }
export default connect(mapStateToProps)(BookList);
