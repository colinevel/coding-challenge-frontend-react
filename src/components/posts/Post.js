import React from 'react';
import styles from "./Post.module.css";
import { Link } from "react-router-dom";

export default function Post(props) {
    return (
        <React.Fragment>
        <li className={styles.Post}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <Link to={`/comments/${props.id}`}><button>Display comments</button></Link>
        </li>
        </React.Fragment>
    )
}
