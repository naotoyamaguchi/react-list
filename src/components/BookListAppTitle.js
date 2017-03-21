import React from 'react';

const BookListAppTitle = (props) => (
  <div className="App-header">
    <h2>{ props.title }</h2>
    <button onClick={ props.doClick }> press me </button>
  </div>
);

export default BookListAppTitle;