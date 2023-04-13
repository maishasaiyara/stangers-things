import React from 'react';
import Posts from './Posts';

const Welcome = (props) => {
const {isLoggedIn, user, posts, setPosts} = props;
console.log(props);
return (
    <>
     {isLoggedIn ? ( <>

        <h1> Hi there, {user.username}! Good to see you again! </h1>
        <Posts posts={posts} setPosts={setPosts}/>
        </>
    ) : (
        <>
        <h1> Hello! Please login to begin!</h1>
        <Posts posts={posts} setPosts={setPosts}/>
        </>
    )} 
    </>
   );
};

export default Welcome;