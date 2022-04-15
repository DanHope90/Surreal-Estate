import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </Router>
  );
}

export default App;
