import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';

// Tues Video 40:44 - 44:10 ish shows importing user from ThunderClient
// Put this in Get Section https://strangers-things.herokuapp.com/api/2303-ftb-et-web-ft/posts/

const carmen = {
    posts: [],
    messages: [],
    _id: "642762a8cd3bfb001620064e",
    username: "Carmen",
    cohort: "642762a8cd3bfb0016200646",
    __v: 0,
}; 
// JSON.parse(carmen);    <-- did this work??

const fakeResponse = {
success: true,
error: null,
data: {
    token:
    'skejaicekJkJFSJEFSLKJAFESLJFAELFJAIA82734QHKJFsjflkjisjflkjjLJPOTHSIRSjshfseksjflkjisjflkjj',
    message: 'Thanks for signing up for our servies.',
    },
};
// JSON.parse(fakeresponse);    <-- don't know if this is working

const Login = ({
    isLoggedIn, 
    setIsLoggedIn, 
    token, 
    setToken, 
    user, 
    setUser,
}) => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
console.log(username);
const navigate = useNavigate();

const handleSubmit = async (event) => {
    event.preventDefault();
    // Make an API call - creating from State the user package 
    const userToAuth = {user: {username: username, password: password} };

    const data = await loginUser(userToAuth)
    //function wrtiten in API

    if(data.token) {
        setToken(data.token);
        setIsLoggedIn(true);
    }

    setUser(data);
    setUsername('');
    setPassword('');
    navigate('/posts');
};


    return(
    <>
        <form onSubmit={handleSubmit}>
            <input type='text' 
            placeholder='JuniCortez' 
            value={username} 
            onChange={(event) =>
            setPassword(event.target.value)}
            /> 
            <input 
            type='text' 
            placeholder='Machete123!' 
            value={password} 
            onChange={(event) => setPassword(event.target.value)}
                />
            <button type='submit'> Login </button> 
        </form>
    </>
    );
};

export default Login;



// Check state for token/"id" 