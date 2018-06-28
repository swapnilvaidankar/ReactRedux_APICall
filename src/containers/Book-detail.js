import React from "react";
import { connect } from "react-redux";

class BookDetail extends React.Component {
  render() {
    if (!this.props.book) {
      return (
        <div className="col-sm-8 main-content text-center">
          <h3>Please select book</h3>
        </div>
      );
    }
    return (
      <div className="col-sm-8 main-content">
        <h4>Book Details</h4>
        <h2>{this.props.book.title}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
