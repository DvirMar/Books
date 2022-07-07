import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import MainHeader from "./components/MainHeader";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/Books" exact>
            <Books />
          </Route>
          <Route path="/Add-Book">
            <AddBook />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="*">
            <Redirect to="/welcome" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
