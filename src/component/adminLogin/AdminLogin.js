import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useCookies } from 'react-cookie'
import "./AdminLogin.css";
import { useState } from "react";
import Loading from "../Loading/Loading";

function AdminLogin() {
    const [, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [admin, setAdmin] = useState({
        username: "",
        password: ""
    });

    const handleInput = (e) => {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        }, []);
    }

    const login = async (e) => {

        // console.log(admin);
        try {
            setLoading(true);
            const response = await axios.post("https://examsystem-api.vercel.app/admin/login", admin);
            if (!response.data.userID) {
                alert("wrong ID password");
                setLoading(false);
            }
            else {

                setCookies("access_token", response.data.token);
                window.localStorage.setItem("userID", response.data.userID);
                setLoading(false);
                navigate("/admin")
            }
        }
        catch (err) {
            console.error(err);
        }

    }


    return (
        <>{loading === true ?
            (<div class='loading'><Loading /></div>) :
            (<div id='container'>
                <div id='containerHeadingBox'>
                    <h1>Admin Login</h1>
                </div>


                <div id='emailBox'>
                    <label htmlFor="username">Username
                        <input name="username" onChange={(e) => handleInput(e)} type="text" id='email' />
                    </label>
                </div>


                <div id='passwordBox'>
                    <label htmlFor="password"> Password
                        <input name="password" onChange={(e) => handleInput(e)} type="password" id='password' />
                    </label>
                </div>

                <button onClick={(e) => login(e)} id='login'>Login</button>

                <NavLink id='goBackLink' to='/' > Go Back</NavLink>


            </div>)

        }</>
    );
}

export default AdminLogin;