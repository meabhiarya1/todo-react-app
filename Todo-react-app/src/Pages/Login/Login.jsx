import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';


const Login = () => {
    const userRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/home");
        console.log(userRef, passRef)
    }

    return (
        <div className={styles.form}>
            <label>Username: </label>
            <input placeholder='Enter Username' type='text' ref={userRef}></input>

            <label>Password: </label>
            <input placeholder='Enter Password' type='password' ref={passRef}></input>

            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login;
