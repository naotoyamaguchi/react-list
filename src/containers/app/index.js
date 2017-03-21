import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../../components/BookList'
import BookForm from '../../components/form'
import InitialBookList from '../../components/InitialBookList'
import './styles.css';

class App extends Component {
  constructor(){
    super();
    this.title = 'Book List App',
    this.state = {
      books: []
    }

    this.addBook = this.addBook.bind(this);
  }

  componentWillMount = () => {
    this.setState( { books: InitialBookList })
  }

  doClick = () => {
    console.log(this.state.books);
  }

  addBook(book){
    InitialBookList.push(book);
    this.setState( { books: InitialBookList } );
  }

  render() {
    return (
        <div className="App-header">
          <BookListAppTitle
          title={this.title}
          doClick={this.doClick}
          bookList={this.bookList}
          />
          {
            this.state.books.map(({title,author}) => 
              <BookList
                key={title}
                title={title}
                author={author}
              />)
          }
          <BookForm
          addBook={this.addBook}
          />
        </div>
    );
  }
}

// export const Test = class Test extends Component {
//   constructor(){
//     super()
//     this.name = 'testname'
//   }

//   render() {
//     return (
//       <div className="Test">
//         <h1>{this.name}</h1>
//       </div>
//     )
//   }
// }


export default App;
