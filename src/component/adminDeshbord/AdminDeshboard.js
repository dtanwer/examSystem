import "./AdminDeshbord.css";
import pic4 from "../../images/logo.png";
// import Dashboard from "./deshbord/Dashboard";
// import Subject from "./subject/Subject";
// import Exam from "./ExamComponent/Exam";
// import Question from "./question/Question";
// import Result from "./result/Result";
// import StudentList from "./studentList/StudentList";
// import Details from "./ExamComponent/details/Details";
// import ViewQuestion from "./ExamComponent/viewQuestion/ViewQuestion";
// import AddQuestion from "./ExamComponent/addQuestion/Addquestion";
// import Student from "./studentList/student/Student";


import { useEffect } from "react";
import { useCookies } from 'react-cookie';
import { NavLink,Outlet,useNavigate } from 'react-router-dom';



function AdminDashboard() {

    const [, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    function goToAdminLogin() {
        setCookies("access_token", "");
        window.localStorage.removeItem("adminID");
        navigate('/');
    }

    useEffect( () => {
        if(window.localStorage.getItem("adminID") == null){
            navigate('/');
        }
})



    return (
        <>
            <div id='header'>
                <div id='headerHeadingBox'>
                    <h3>Online Exam System</h3>
                </div>

                <div id='headerMenuBox'>
                    <NavLink to='' > <span> Dashboard</span> </NavLink>
                    <NavLink to='' > <span onClick={goToAdminLogin}> Logout</span> </NavLink>
                     
                </div>
            </div>

            <div id='content'>

                <div id='sideMenubar'>
                    <div id='sideMenubarImageBox'>
                        <img src={pic4} alt="" />
                    </div>

                    <div id='sideMenubarList'>
                        <NavLink exact className='removeUnderline' to='subject'> <button > <span>  Subject </span></button></NavLink>
                        <NavLink exact className='removeUnderline' to="exam"> <button > <span>  Exam </span></button></NavLink>
                        <NavLink exact className='removeUnderline' to="question"> <button > <span>  Question </span></button></NavLink>
                        <NavLink exact className='removeUnderline' to="result"> <button > <span>  Result </span></button></NavLink>
                        <NavLink exact className='removeUnderline' to="studentList"> <button > <span>  StudentList </span></button></NavLink>
                    </div>
                </div>


                <div id='display'>
                   <Outlet/>
                </div>



            </div>

        </>
    );
}

export default AdminDashboard;