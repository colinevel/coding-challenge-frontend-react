import React from 'react';
import './App.css';
import Users from "./views/Users";
import UpdateUsers from "./views/UpdateUsers";
import UserPosts from "./views/UserPosts";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/update/:id" component = {UpdateUsers} />
        <Route path="/user/:id/posts" component = {UserPosts} />
      </Switch>
    </div>
  );
}

export default App;
