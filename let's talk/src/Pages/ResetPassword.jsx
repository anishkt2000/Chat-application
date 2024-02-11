import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { resetPassword } from '../utils/APIRoutes';

function ResetPassword() {
    const navigate = useNavigate(); // Moved inside the functional component
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const { password, confirmPassword, username, email } = values;
            const { data } = await axios.post(resetPassword, {
                username,
                email,
                password,
            });
            console.log(data);
            if (data.status === false) {
                toast.error(data.msg, toastOption);
            }
            if (data.status === true) {
                localStorage.setItem("chat-app-user", JSON.stringify(data.user));
                navigate('/');
            }
             // Moved inside the handleSubmit function
        };
    }

    useEffect(() => {
        if (localStorage.getItem("chat-app-user")) {
            navigate('/');
        }
    }, []);

    const toastOption = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
            toast.error("Password and confirm password should be same.", toastOption);
            return false;
        }
        else if (username.length < 3) {
            toast.error("Username should be greater than 3 characters", toastOption);
            return false;
        }
        else if (password.length < 8) {
            toast.error("Password should be equal or greater than 8 characters", toastOption);
            return false;
        }
        else if (email === "") {
            toast.error("Email is required", toastOption);
            return false;
        }
        return true;
    }

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    return (
        <>
            <FormContainer>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img src={logo} alt='Logo' />
                        <h1>chatHub</h1>
                    </div>
                    <input
                        type='text'
                        placeholder='Username'
                        name='username'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type='password'
                        placeholder='Confirmed Password'
                        name='confirmPassword'
                        onChange={(e) => handleChange(e)}
                    />
                    <button type='submit'>Reset Password</button>
                    {/* <span>Already have an account ?
                        <Link to="/login">Login</Link>
                    </span> */}
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    )
}

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 5rem;
        }
        h1 {
            color: white;
            text-transform: uppercase;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem;
    }
    input {
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: white;
        width: 100%;
        font-size: 1rem;
        &:focus {
            border: 0.1rem solid #997af0;
            outline: none;
        }
    }
    button {
        background-color: #4e0eff;
        color: white;
        padding: 1rem 2rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        &:hover {
            background-color: #4e0eff;
        }
    }
    button:hover{
    background-color:#4e0eff50;
  }
    span {
        color: white;
        text-transform: uppercase;
        a {
            color: #4e0eff;
            text-decoration: none;
            font-weight: bold;
        }
        a:hover{
            color :#4e0eff50;
        }
    }
`;

export default ResetPassword;