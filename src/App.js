import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import Search from './Search'
import  BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'
import './App.css';

//Third look of the project 

 class App extends Component {
   state = { books: [] };

  componentDidMount() {
    // Loading books from BookAPI
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  moveBook = (changedBookShelf,shelf) => {
    BooksAPI.update(changedBookShelf, shelf).then(response => {
      changedBookShelf.shelf=shelf;
      this.setState((prevState)=>({
        books : prevState.books.filter(a => a.id !== changedBookShelf.id).concat(changedBookShelf)
      }));
    });
  };
  
  render() {
    const { books } = this.state;

  

    return (
      <div>
        <div>
        <Route exact
            path="/"
            render={() => (
              <div className="list-books">
              <div className="list-books-title">
              <BooksList books={books} moveBook={this.moveBook} />
              </div>
              </div>
            )}
          />
        

        <Route
            path="/search"
            render={() => (
              <Search books={books} moveBook={this.moveBook}/>
            )}
          />

        </div>

      </div>
    )
  }
}

export default App