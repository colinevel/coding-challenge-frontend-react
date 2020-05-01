import React from 'react';
import './App.css';
import Users from "./views/Users";
import UpdateUsers from "./views/UpdateUsers";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/update/:id" component = {UpdateUsers} />
      </Switch>
    </div>
  );
}

export default App;
