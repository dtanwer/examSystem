
import pic4 from "../../images/logo.png";
import pic1 from "../../images/1.png";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import style from './AdminDeshbord.module.css';



function AdminDashboard() {

    const [, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    function goToAdminLogin() {
        setCookies("access_token", "");
        window.localStorage.removeItem("adminID");
        navigate('/');
    }

    useEffect(() => {
        if (window.localStorage.getItem("adminID") == null) {
            navigate('/');
        }
    })



    return (
        <div className={style.mainDash}>
            <div className={style.navBar}>
                <div className={style.navHeading}><h3>Deep |  <img src={pic1} className={style.icon} alt="icon" /> ExamSystem </h3></div>
                <div className={style.link}>
                    <NavLink to='' > <span> Dashboard</span> </NavLink>
                    <NavLink to='' > <span onClick={goToAdminLogin}> Logout</span> </NavLink>
                </div>
            </div>

            <div className={style.container}>



                <div className={style.left}>
                    <div className={style.myimg}>
                        <img src={pic4} alt="" />
                    </div>
                    <div className={style.navList}>
                        <ul>
                            <li><NavLink exact className='removeUnderline' to='subject'>  <span>  Subject </span></NavLink></li>
                            <li><NavLink exact className='removeUnderline' to="exam"> <span>  Exam </span></NavLink></li>
                            <li><NavLink exact className='removeUnderline' to="question">  <span>  Question </span></NavLink></li>
                            <li><NavLink exact className='removeUnderline' to="result"> <span>  Result </span></NavLink></li>
                            <li><NavLink exact className='removeUnderline' to="studentList">  <span>  StudentList </span></NavLink></li>
                        </ul>
                    </div>
                    <div className={style.bottom}>
                        <ul>
                            <li> <a href="#">Help</a> </li>
                            <li> <a href="#">User Feedback</a> </li>
                        </ul>
                    </div>
                </div>

                <div className={style.right}>
                    <Outlet />
                </div>

            </div>



        </div>
    );
}

export default AdminDashboard;