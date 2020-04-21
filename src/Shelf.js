
// This class will receive books and categorizes them based on id and shelf. 
import React, { Component } from "react";
import Book from './Book';

class Shelf extends Component {
    render (){
      const {books, moveBook}= this.props;
    return (

      <ol className="books-grid">
      {books.map(book => (
        <Book
          book={book}
          books={books}
          key={book.id}
          moveBook={moveBook}
        />
      ))}
    </ol>
  );
}
}
  
export default Shelf;
