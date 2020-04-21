 
import React from "react";
import Shelf from './Shelf'
import { Link } from 'react-router-dom';
import Search from './Search'

const ShelvesValues = [
  { type: 'currentlyReading', title: 'Currently Reading' },
  { type: 'wantToRead', title: 'Want to Read' },
  { type: 'read', title: 'Read' }
];

  const BooksList = props => {
    const {books, moveBook}= props;
    return (
      <ol className="list-books-content">

          Welcome to my Reading List
          
          {ShelvesValues.map((shelf,i) => {
          const bookShelf = books.filter(book => book.shelf === shelf.type);
          return (
            <div className="bookshelf" key={i}>
              <li className="bookshelf-title">{shelf.title}</li>
              <div className="bookshelf-books">
              <Shelf books={bookShelf} moveBook={moveBook}/> 
              </div>              
            </div>
          );
          })}

        <Link
        to='/search'
        onClick={Search}>Search Books</Link>

    </ol>
  );
  };

export default BooksList
