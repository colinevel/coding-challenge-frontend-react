import React, { useState, useEffect } from 'react';
import Post from "../components/posts/Post";
import styles from "./UserPosts.module.css";

export default function UserPosts(props) {

const [posts, setPosts] = useState([]);

const loadPostsData = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.match.params.id}`);
    const data = await response.json();
    setPosts(data);
    console.log(data);
}

useEffect(() => {
loadPostsData();
}, []);

    return (
        <React.Fragment>
            <h2>User Posts</h2>
            <ul className={styles.PostsContainer}>
            {posts.map((post) => (
            <Post 
             key={post.id}
             id={post.id}
             title={post.title}
             body={post.body} />
            ))}
        </ul>
        </React.Fragment>
    )
}
