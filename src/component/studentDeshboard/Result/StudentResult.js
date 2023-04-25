

import axios from "axios";
import React, {useState , useEffect} from "react"; 


import style from "../StudentDashboard.css";


function StudentResult() {

 const [results , setResults] = useState([]);
const useGetUserID= ()=>{
  return window.localStorage.getItem("userId");
};

const userId=useGetUserID();
console.log(userId);

  useEffect(()=>{    
     async function getAllResults(){
         let value = await axios.get(`https://examsystem-api.vercel.app/result/${userId}`);
         setResults(value.data);
     }
         getAllResults();
  },[userId]);


 return (
     <>
         <div id={style.displayHeadingBox}>
             <h2>Student Exam List</h2>
         </div>
         <div id={style.tableBox}>
             <table >
                 <thead>
                 <tr>
                             <th id="center">User Email</th>
                             <th id="center">User Name</th>
                             <th id="center">Exam Name</th>
                             <th id="center">Exam Date</th>
                             <th id="center">Your Score</th>  
                             <th id="center">Result Status</th>
                          </tr>
                 </thead>
                 <tbody >
                 {
                     results.map((data , i) => {
                                 return(
                                  <tr key={i}>
                                  <td>{data.userEmail}</td>
                                  <td>{data.userName}</td>
                                  <td>{data.examName}</td>
                                  <td>{data.examDate}</td>
                                  <td>{data.resultScore}</td>
                                  <td>{data.resultStatus}</td>
                              </tr>
                                 );

                             })
                         }

                 </tbody>
             </table>
         </div>
     </>
 );
}

export default StudentResult;