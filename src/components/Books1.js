import React from 'react';

const Books1 = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <h3>{props.courseName}</h3>
      <h3>{props.courseNumber}</h3>
      <h3>{props.price}</h3>
      <h3>{props.phoneNumber}</h3>
    </li>
  );
};

export default Books1;