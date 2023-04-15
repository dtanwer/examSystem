
import "./Home.css";
import pic1 from "../../images/1.png";
import pic2 from "../../images/2.png";
import pic3 from "../../images/3.jpg";

import {NavLink} from "react-router-dom";


   
   function Home(){
       return(
           <>
              <div  id='header'>
                  <div id='headerHeadingBox'>
                       <h3>Online Exam System</h3> 
                   </div>
               </div>

             <div id='div1'>
                 <img src={pic1} alt="" />
                 <span>Online Exam</span>
             </div>


             <div id='div2'>
           
                 <div className ='div3'>
                 <NavLink to='/login'><img src={pic2} alt="" />
                       <span>Student</span></NavLink>
                 </div>

                 <div  className ='div3'>
                 <NavLink to='/adminlogin'><img src={pic3} alt="" />
                      <span>Admin</span></NavLink>
                 </div>
               
             </div>


            

           </>
       );
   }

    

   export default Home;