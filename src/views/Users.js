import React, { useState, useEffect } from 'react';
import User from "../components/users/User";
import styles from "./Users.module.css";

export default function Users() {

const [users, setUsers] = useState([]);

useEffect(() => {
loadUserData();
}, []);

const loadUserData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    console.log(data);
}

    return (
        <React.Fragment>
        <h1>Users List</h1>
        <ul className={styles.Users}>
            {users.map((user) =>(
                <User 
                 key={user.id}
                 name={user.name}
                 username={user.username}
                 email={user.email}
                 address={user.address}
                 phone={user.phone}
                 website={user.website}
                 company={user.company} />
            ))}
        </ul>
        </React.Fragment>
    )
}
