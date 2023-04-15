import { NavLink,useNavigate } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";





function Signup() {
    const navigate=useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        userEmail: "",
        password: ""
    });

    function onTextFieldChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }


    const [password, setPassword] = useState("");

    function handlePassword(e) {
        setPassword({ "confirmPassword": e.target.value });
    }

    async function handleSignup() {
        // console.log(userData);
        // console.log(password);

        if (userData.password === password.confirmPassword) {
            try {
                
                const res=await axios.post('https://examsystem-api.vercel.app/auth/register',userData)
                alert("Your account has created");
                alert("Please Login");
                console.log(res);
                navigate('/login');
            } catch (err) {
                console.log(err);
            }
        }
        else
        {
            alert("password did not match");
        }
    }



    return (
        <div id='container'>

            <div id='formHeading'>
                <h1>Student Signup</h1>
                <p>Please complete the form below to register with us</p>
            </div>

            <div id='nameBox'>
                <label htmlFor="name">Name
                    <input onChange={(e) => onTextFieldChange(e)}
                        type="text" name="username" required />
                </label>
            </div>


            <div id='emailBox'>
                <label htmlFor="email"> Email
                    <input onChange={(e) => onTextFieldChange(e)}
                        type="text" name="userEmail" required />
                </label>
            </div>

            <div id='passwordBox'>
                <label htmlFor="password"> Password
                    <input onChange={(e) => onTextFieldChange(e)}
                        type="password" name="password" required />
                </label>
            </div>


            <div id='confirmPasswordBox'>
                <label htmlFor="confirmPassword">Confirm Password
                    <input onChange={(e) => handlePassword(e)}
                        type="password" name="confirmPassword" required />
                </label>
            </div>


            {/* <button id='signup' onclick="signup()">Sign Up</button> */}
            <button id='signup1' onClick={handleSignup} >Sign Up</button>


            <div id='login'>
                Have a Account?  <NavLink to='/login' > Log in</NavLink>
            </div>


        </div>
    );
}

export default Signup;