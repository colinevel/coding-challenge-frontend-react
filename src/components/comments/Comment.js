import React from 'react';
import styles from "./Comments.module.css";

export default function Comment(props) {
    return (
        <li className={styles.Comment}>
            <h3>{props.name}</h3>
            <p>From: {props.email}</p>
            <p>{props.body}</p>
        </li>
    )
}
