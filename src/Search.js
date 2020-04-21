// this component will show all the books and allows the user to search book based on query 
import React, {Component} from "react";
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';

class Search extends Component {
  
  state = {
    query: '',
    showSearchBooks: []
  }

  findBook = event => {
    const query = event.target.value;
    this.setState({ query });

  if (query) {
    BooksAPI.search(query.trim(), 10).then(books => {
      books.length >0
        ? this.setState({ showSearchBooks: books})
        : this.setState({ showSearchBooks: []});
    });
  } else this.setState({showSearchBooks:[]})
};

  render (){
    const {query, showSearchBooks}= this.state;
    const {books, moveBook} =this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to="/">
            Close
        </Link>
            
              <div className="search-books-input-wrapper">
                  <input
                    type='text'
                    placeholder='Search books author or title'
                    value={query}
                    onChange={this.findBook}
                  />
              </div>
          </div>
            <div className="search-books-results">
            <ol className="books-grid">
              {showSearchBooks.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    moveBook={moveBook}
                  />
                ))}
                </ol>
              </div>

          
      </div>

    );
  }
}
export default Search;
