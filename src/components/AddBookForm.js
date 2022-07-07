import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import Loading from '../UI/Loading';
import classes from './AddBookForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const nameInputRef = useRef();
  const courseNameInputRef = useRef();
  const courseNumberInputRef = useRef();
  const priceInputRef = useRef();
  const phoneNumberInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredSeller = nameInputRef.current.value;
    const enteredCourseName = courseNameInputRef.current.value;
    const enteredCourseNumber = courseNumberInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;

    const fullData = { name: enteredSeller, courseName: enteredCourseName, courseNumber: enteredCourseNumber, 
                       price: enteredPrice, phoneNumber: enteredPhoneNumber} 

    props.onAddBook(fullData);

    fetch(
      'https://books-http-default-rtdb.firebaseio.com/books.json',
      {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(fullData),
        
        
      });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment >
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      />
      <div style={{ display:'flex', justifyContent:'center' }}>
      <Card>
        <form 
          onFocus={formFocusedHandler}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <Loading />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Seller name</label>
            <input type='text' id='author' ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Course name</label>
            <input type='text' ref={courseNameInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor='number'>Course number</label>
            <input type='number' ref={courseNumberInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor='number'>Price</label>
            <input type='number' ref={priceInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor='tel'>Phone Number</label>
            <input type='tel' ref={phoneNumberInputRef}></input>
          </div>
          <div className={classes.center}>
            <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Add Book</button>
            </div>
          </div>
        </form>
      </Card>
      </div>
    </Fragment>
  );
};

export default QuoteForm;