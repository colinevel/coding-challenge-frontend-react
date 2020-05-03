import React, { useState, useEffect } from 'react';
import Comment from "../components/comments/Comment";
import styles from "./PostComments.module.css";

export default function PostComments(props) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`)
        .then(res => res.json())
        .then(json => setComments(json))
        .catch(err => console.log(err))
    });

    if (!comments.length) {
        return <p>Loading ...</p>;
        }

    return (
        <React.Fragment>
            <h2>Comments from Post</h2>
            <ul className={styles.CommentsContainer}>
               {comments.map(comment => (
                   <Comment
                   key={comment.id}
                   name={comment.name}
                   email={comment.email}
                   body={comment.body} />
               ))} 
            </ul>
        </React.Fragment>
    )
}
