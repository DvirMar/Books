import React from 'react';
import Books1 from './Books1';

const BooksList = (props) => {
  return (
    <div> {props.books.map((Books) => (
        <Books1
          key = {Books.id}
          name = {Books.name}
          courseName = {Books.courseName}
          courseNumber = {Books.courseNumber}
          price = {Books.price}
          phoneNumber = {Books.phoneNumber}
        />
      ))}</div>
     
  );
};

export default BooksList;
