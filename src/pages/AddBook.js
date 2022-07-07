import { useHistory } from 'react-router-dom';

import AddBookForm from '../components/AddBookForm';

const AddBook = () => {
  const history = useHistory();

  const addBookHandler = (bookData) => {
    console.log(bookData.name);
    console.log(bookData.courseName);
    console.log(bookData.courseNumber);
    console.log(bookData.price);
    console.log(bookData.phoneNumber);


    history.push('/Books');
  };



  return <AddBookForm onAddBook={addBookHandler} />;
};

export default AddBook;