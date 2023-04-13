import React from 'react';

const Posts = ({posts, setPosts, isLoggedIn, user}) => {
    return (
    <>
        {isLoggedIn ? (
            <>
            <h1> Hello {user.username}! from Posts.js</h1>
            {posts.map((post) => {
            return (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>Author id: {post.userId}</p>
                </article>
            );
        })}
        </>
        ): (
            <>
        <h1> Hello unauthenticated, person! From posts.js</h1>
            {/* {posts.map((post) => {
            return (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>Author id: {post.userId}</p>
                </article>
                );
            })}  */}
         </>
        )}
    </>
    );
};

export default Posts;


//Posts are not showing up 
//Posts.map is not function so commented out - where is this missing??