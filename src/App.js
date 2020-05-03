import React, { useState, useEffect} from 'react';
import './App.css';
import Users from "./views/Users";
import UpdateUsers from "./views/UpdateUsers";
import UserPosts from "./views/UserPosts";
import PostComments from "./views/PostComments";
import { Route, Switch } from "react-router-dom";


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsersData();
    }, []);

  const loadUsersData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
}

// This function deletes the User then it updates the state for users list.
const deleteUser = async (id) => {
    let updatedUserList;
    await (fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
      }))
    .then(updatedUserList = users.filter(user =>user.id !== id))
    .then(setUsers(updatedUserList))
    .catch(err => console.log(err))
}

// const deletePosts = (async(id) => {
//   await (fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: 'DELETE'
//       }))

// const deleteComments = (async(id) => {
//   const response = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//   const data = await response.json();
//   for (let i=0; i<data.length; i++) {
//     let PostID = data[i].id
//     console.log("this is my index", PostID)
//     fetch(`https://jsonplaceholder.typicode.com/comments?postId=${PostID}`, {
//     method: 'DELETE'
//     })
//   }
//   })

  return (
    <div className="App">
      <Switch>
        <Route 
         exact path="/"
         render= {(props) => <Users {...props}
                                 users={users}
                                 loadUsersData={true}
                                 deleteUser={deleteUser} />}
         />
        <Route path="/update/:id" component = {UpdateUsers} />
        <Route path="/user/:id/posts" component = {UserPosts} />
        <Route path="/comments/:id" component = {PostComments} />
      </Switch>
    </div>
  );
}

export default App;

