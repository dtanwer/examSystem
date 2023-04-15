
   import  "./Dashboard.css";
   import axios from 'axios';
   import {useState  , useEffect} from "react";
import { NavLink } from "react-router-dom";

     function Dashboard()
     {

          const [exam , setExam] = useState("Updating...");
          const [question , setQuestion] = useState("Updating...");
          const [user , setUser] = useState("Updating...");

            useEffect(() => {
                async function getAllExam(){
                    let value  = await axios.get("https://examsystem-api.vercel.app/exam");
                    setExam("We have total " +value.data.length + " exam");
                }
                getAllExam();


                async function getAllQuestions(){
                    let value  = await axios.get("https://examsystem-api.vercel.app/question");
                    setQuestion("We have total " +value.data.length + " question");
                }
                getAllQuestions();


                async function getAllUsers(){
                    let value  = await axios.get("https://examsystem-api.vercel.app/auth");
                    setUser("We have total " +value.data.length + " user");
                }
                getAllUsers();
            })

         return(
             <>
                           <div id='displayHeadingBox'> 
                               <h1>Dashboard</h1>     
                           </div>

                            <div id='box1'>
                               <p id='countOfExam'>{exam}</p>
                                  <NavLink to='exam'> <button>View Details</button></NavLink>
                            </div>

                              <div id='box2'>
                                  <p  id='countOfQuestion'>{question}</p>
                                  <NavLink to='question'> <button>View Details</button></NavLink>
                              </div>

                              <div id='box3'>
                                  <p id='countOfUser'>{user}</p>
                                  <NavLink to='studentList'> <button>View Details</button></NavLink>
                              </div>
                             
             </>
         );
     }

     export default Dashboard;