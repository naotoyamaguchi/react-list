import React, {Component} from 'react'

const BookList = (props) => (

  <ul>
  
    <li>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
    </li>

  </ul>
);

export default BookList;