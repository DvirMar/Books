import Card from "../../UI/Card";
import classes from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className={classes.center}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card>
          <h1>Welcome to my website!</h1>
          <h3>Here you can search for a book you want to buy</h3>
          <h3>You can also sell your own book but you will have a user first</h3>
          <h3>Hope you will find what you are looking for</h3>
          <h3>If there are any problem you can contact me by Email at: </h3>
          <h3>Dvirma1996@gmail.com</h3>
          <div className="contact">

          </div>
        </Card>
      </div>


    </div>
  )
};

export default WelcomePage;
