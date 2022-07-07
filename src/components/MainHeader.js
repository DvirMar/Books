import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';

import classes from './MainHeader.module.css';

const MainHeader = () => {

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  }


  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/Books'>
              Books
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to='/Add-Book'>
                Add Book
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to='/auth'>Login</NavLink>
            </li>
          )}
          <div className={classes.action}>
            {isLoggedIn && (
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;