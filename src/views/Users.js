import React from 'react';
import User from "../components/users/User";
import styles from "./Users.module.css";

export default function Users(props) {

    if (!props.users.length) {
    return <p>Loading ...</p>;
    }

    return (
        <React.Fragment>
        <h1>Users List</h1>
        <ul className={styles.Users}>
            {props.users.map((user) =>(
                <User 
                 key={user.id}
                 id={user.id}
                 name={user.name}
                 username={user.username}
                 email={user.email}
                 address={user.address}
                 phone={user.phone}
                 website={user.website}
                 company={user.company}
                 deleteUser={props.deleteUser}
                 />
            ))}
        </ul>
        </React.Fragment>
    )
}
