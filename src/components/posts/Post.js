import React from 'react';
import styles from "./Post.module.css";

export default function Post(props) {
    return (
        <li className={styles.Post}>
            <p>{props.id}</p>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </li>
    )
}
