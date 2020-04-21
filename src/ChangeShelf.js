// This component saves the value of the options and passes it on.
import React from 'react'
import { Component } from 'react';

class ChangeShelf extends Component{
    
    ShelfUpdate = event => this.props.moveBook(this.props.book, event.target.value)


    render (){
        const {books,book}=this.props;

        //This method will assign the defau value of the sehlf 
        //to the current shelf where the book is.
        let current = 'none';
        for (let i of books) {
            if (i.id === book.id) {
              current= i.shelf;
              break;
            }
          }
        return (
            <div>
    
                <select onChange={this.ShelfUpdate} defaultValue={current}>

                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Reads</option>
                      <opttion value="None">None</opttion>
                    </select>
            </div>
        );
    }
}
export default ChangeShelf 

