// This component saves the value of the options and passes it on.
import React from 'react'
import ChangeShelf from './ChangeShelf'

const EachBook = props =>  {

const {book, books, moveBook} = props;
    return (
        
        <div className="book">
            <div>
            <div
          className="book-cover"
          style={{
            width: 130,
            height: 190,
            backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : 'icons/book-placeholder.svg'
            })`
          }}
        />
            <ChangeShelf 
                book={book} 
                books={books}
                moveBook={moveBook}
                />
            </div>

            <div className="book-title">{book.title}</div>
            {book.authors &&
            book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}

            
        </div>
      );
    }

export default EachBook 