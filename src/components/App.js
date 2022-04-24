import React, { useState } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  const [userID, setUserId] = useState(false);

  const onLogin = (response) => {
    setUserId(response.userID);
  };

  const onLogout = () => {
    window.FB.logout();
    setUserId("");
  };

  return (
    <Router>
      <div className="App">
        <NavBar userID={userID} onLogin={onLogin} onLogout={onLogout} />
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Properties {...props} userID={userID} />}
        />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </Router>
  );
}

export default App;
