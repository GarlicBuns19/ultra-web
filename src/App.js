// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import SingleUltra from "./components/SingleUltra";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/ultra/data/:id"}>
            <SingleUltra />
          </Route>
          <Route exact path={"/create"}>
            <AddForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
