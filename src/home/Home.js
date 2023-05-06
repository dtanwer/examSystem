import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import pic1 from "../images/1.png";
import pic2 from "../images/2.png";
import pic3 from "../images/3.png";
import style from './Home.module.css'

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useCookies } from 'react-cookie'
import Loading from "../component/Loading/Loading";





function Home() {

    const [, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [userData, setUserData] = useState({
        username: "",
        userEmail: "",
        password: ""
    });

    const onTextFieldChange = (e) => {

        if(signUp)
        {
            setUserData({
                ...userData,
                [e.target.name]: e.target.value
            });
        }
        else{

            setUser({
                ...user,
                [e.target.name]: e.target.value
            });
        }
    }

    const [password, setPassword] = useState({});

    function handlePassword(e) {
        setPassword({ "confirmPassword": e.target.value });
    }

    const handleLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post(admin !== true ? "https://examsystem-api.vercel.app/auth/login" : "https://examsystem-api.vercel.app/admin/login", user);
            if (!response.data.userID) {
                alert("wrong ID password");
                setLoading(false);
            }
            else {

                setCookies("access_token", response.data.token);
                if (admin) {
                    window.localStorage.setItem("adminID", response.data.userID);
                    setLoading(false);
                    navigate("/admin");
                }
                else {
                    window.localStorage.setItem("userID", response.data.userID);
                    setLoading(false);
                    navigate("/student");
                }

            }
        }
        catch (err) {
            console.error(err);
        }
    }

    async function handleSignup() {
        // console.log(userData);
        // console.log(password);
        if (userData.password === password.confirmPassword) {
            try {
                
                const res=await axios.post('https://examsystem-api.vercel.app/auth/register',userData)
                alert("Your account has created");
                alert("Login with Your Name as username !!");
                console.log(res);
                setSignUp(false);
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
        <div className={style.home}>
            <div className={style.navBar}>
                <h3>Deep |  <img src={pic1} className={style.icon} alt="icon" /> ExamSystem </h3>
            </div>


            <div className={style.container}>

                <div className={style.item}>
                    {
                        admin === true ?
                            <img src={pic3} className={style.myImg} alt="User" /> :
                            <img src={pic2} className={style.myImg} alt="User" />
                    }
                </div>

                <div className={style.item}>
                    {signUp === true ?
                        (<div className={style.form}  style={{height:"30rem"}}>
                            <h2>SignUp</h2>
                            <div className={style.inp}>
                                <PhoneIphoneOutlinedIcon />
                                <input type="text" placeholder=" Name" name="username" onChange={onTextFieldChange} />
                            </div>
                            <div className={style.inp}>
                                <PhoneIphoneOutlinedIcon />
                                <input type="email" placeholder=" Email" name="userEmail" onChange={onTextFieldChange} />
                            </div>
                            <div className={style.inp}>
                                <LockOutlinedIcon />
                                <input type="password" placeholder=" Password" name='password' onChange={onTextFieldChange} />
                            </div>
                            <div className={style.inp}>
                                <LockOutlinedIcon />
                                <input type="password" placeholder=" Confirm Password" name='confirmPassword' onChange={handlePassword} />
                            </div>
                            <div className={style.links}>
                                <button onClick={handleSignup}>SignUp</button>
                                <button onClick={()=>setSignUp(false)}>Login</button>
                            </div>

                        </div>) :
                        (<div className={style.form}>
                            {
                                admin === true ?
                                    <h2>Admin's Login</h2> :
                                    <h2>Student's Login</h2>

                            }
                            <div className={style.inp}>
                                <PhoneIphoneOutlinedIcon />
                                <input type="text" placeholder=" Username" name="username" onChange={onTextFieldChange} />
                            </div>
                            <div className={style.inp}>
                                <LockOutlinedIcon />
                                <input type="password" placeholder=" Password" name='password' onChange={onTextFieldChange} />
                            </div>
                            <div className={style.links}>
                                <button onClick={handleLogin}>Login</button>
                                {admin === true ? "" :
                                    <span onClick={() => setSignUp(true)}>New User ?</span>}
                            </div>
                            <div className={style.admin}>
                                {
                                    admin === true ?
                                        <button onClick={() => setAdmin(false)}>Student Login</button> :
                                        <button onClick={() => setAdmin(true)}>Admin Login</button>

                                }
                            </div>
                        </div>)
                    }
                </div>

            </div>

            <div className={style.cloud}>
                <p>Copyright © 2023  Deep , All Rights Reserved</p>
            </div>




        </div>
    );
}



export default Home;