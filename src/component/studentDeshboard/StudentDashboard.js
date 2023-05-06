
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
import style from './StudentDashboard.module.css';
import { useEffect, useState } from "react";
import pic1 from '../../images/1.png'




function StudentDashboard() {

  const [, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [doingExam,setDoingExam]=useState(false);

   useEffect( () => {
           if(window.localStorage.getItem("userID") == null){
               navigate('/');
           }
   })



  function logout() {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    alert("moving to login page");
    navigate('/');
  }



  return (
    <div className={style.dashboard}>
      <div className={style.navBar}>
        <div className={style.navHeading}><h3>Deep |  <img src={pic1} className={style.icon} alt="icon" /> ExamSystem </h3></div>
       {
        doingExam===false? ( <div className={style.link}>
          <NavLink  to=""> <span>Subject</span> </NavLink>
          <NavLink to="result"> <span>My Result</span></NavLink>
          <NavLink onClick={logout} to="/"> <span>Logout</span> </NavLink>
        </div>):("")
       }
      </div>
      <div className={style.Dashcmp}>
        <Outlet />
      </div>
    </div>
  );
}

export default StudentDashboard;