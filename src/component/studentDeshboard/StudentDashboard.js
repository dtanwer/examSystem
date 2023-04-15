
import { NavLink ,Outlet,useNavigate} from "react-router-dom";
import {useCookies} from 'react-cookie'
import './StudentDashboard.css';
import { useEffect } from "react";




   function StudentDashboard(){

    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
    
    //  useEffect( () => {
    //         //  if(sessionStorage.getItem("user") == null){
    //         //      alert("Detect Illegal Way of Entering");
    //         //     //  history.push("/StudentLogin");
    //         //  }
    //  })



      function logout(){
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        alert("moving to login page");
        navigate('/login');
      }
     

      
       return (
           <>
              <div id='header'>
             
                   <div id='headerHeadingBox'>
                       <h3>Online Exam System</h3> 
                   </div>

                     <div id='headerMenuBox'>
                         <NavLink exact to=""> <span>Subject</span> </NavLink>
                         <NavLink exact to="result"> <span>My Result</span></NavLink>
                         <NavLink onClick={logout} exact to="/login"> <span>Logout</span> </NavLink>
                    </div>

                </div>

               <div id='displayBox'>
                <Outlet/>
                </div>
           </>
       );
   }

   export default StudentDashboard;