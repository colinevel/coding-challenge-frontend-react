import React from 'react'
import Address from "./Adress";
import Company from "./Company";
import styles from "./User.module.css";

export default function User(props) {
    return (
        <li className={styles.User}>
            <h2>{props.name}</h2>
            <p>Username: {props.username}</p>
            <p>Email: {props.email}</p>
            <Address 
                street={props.address.street}
                suite={props.address.suite}
                city={props.address.city}
                zipcode={props.address.zipcode}
                geo={props.address.geo} />
            <p>Phone: {props.phone}</p>
            <p>Website: <a href={`${props.website}`}>{props.website}</a></p>
            <Company 
                companyName={props.company.name}
                companyCatchPhrase={props.company.catchPhrase}
                companyBS={props.company.bs}
            />
        </li>
    )
}
