

import "./Login.css";
import { useState } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'


function Login() {

    const [,setCookies]=useCookies(["access_token"]);
    const navigate=useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const onTextFieldChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }


    // const [check, setCheck] = useState(false);


    const handleLogin = async () => {
        try{
            const response=await axios.post("https://examsystem-api.vercel.app/auth/login",user);
            if(!response.data.userID)
            {
                alert("wrong ID password");
            }
            else
            {

                setCookies("access_token",response.data.token);
                window.localStorage.setItem("userID",response.data.userID);
                navigate("/student")
            }
          }
          catch(err){
            console.error(err);
          }
    }




    return (
        <div id='container'>

            <div id='containerHeadingBox'>
                <h1>Student Login</h1>
            </div>

            <div id='emailBox'>
                <label htmlFor="email"> Email
                    <input name="username"
                        onChange={(e) => onTextFieldChange(e)} type="text" id='email' />
                </label>
            </div>


            <div id='passwordBox'>
                <label htmlFor="password"> Password
                    <input name="password"
                        onChange={(e) => onTextFieldChange(e)} type="password" id='password' />
                </label>
            </div>


            <button id='login' onClick={handleLogin}>Login</button>

            <div id='signup'>
                  <NavLink to='/signup'>New to Portal? Register</NavLink>
                <NavLink to='/' id='goBackLink'> Go Back</NavLink>
            </div>


        </div>
    );
}

export default Login;