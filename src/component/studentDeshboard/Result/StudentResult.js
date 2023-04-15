

import axios from "axios";
import React, {useState , useEffect} from "react"; 


import style from "../StudentDashboard.css";


function StudentResult() {

 const [results , setResults] = useState([
    {
      "id": 1,
      "result_status": "Pass",
      "result_score": "3",
      "user_email": "ram@gmail.com",
      "exam_date": "12-23-12",
      "exam_name": "Maths",
      "total_marks": "5",
      "exam_id": "1",
      "total_Question": "5"
    },
    {
      "id": 2,
      "result_status": "Pass",
      "result_score": "3",
      "user_email": "ram@gmail.com",
      "exam_date": "12-23-12",
      "exam_name": "Maths",
      "total_marks": "5",
      "exam_id": "1",
      "total_Question": "5"
    },
    {
      "id": 3,
      "result_status": "Pass",
      "result_score": "3",
      "user_email": "shiv@gmail.com",
      "exam_date": "12-23-12",
      "exam_name": "Maths",
      "total_marks": "5",
      "exam_id": "1",
      "total_Question": "5"
    },
    {
      "result_status": "Pass",
      "result_score": 3,
      "user_email": "ram@gmail.com",
      "exam_date": "18-9-2021 20:49:39",
      "exam_name": "Maths",
      "total_marks": "5",
      "exam_id": "1",
      "total_Question": "5",
      "id": 4
    },
    {
      "result_status": "Pass",
      "result_score": 4,
      "user_email": "vishnu@gmail.com",
      "exam_date": "19-9-2021 15:11:27",
      "exam_name": "Maths",
      "total_marks": "5",
      "exam_id": "1",
      "total_Question": "5",
      "id": 5
    },
    {
      "result_status": "Pass",
      "result_score": 4,
      "user_email": "agni@gmail.com",
      "exam_date": "19-9-2021 15:20:37",
      "exam_name": "Maths",
      "total_marks": "5",
      "exam_id": "1",
      "total_Question": "5",
      "id": 6
    }
  ]);

//   useEffect(()=>{    
//      async function getAllResults(){
//          let value = await axios.get("http://localhost:3333/result");
//          setResults(value.data);
//      }
//          getAllResults();
//   },[]);


 return (
     <>
         <div id={style.displayHeadingBox}>
             <h2>Student Exam List</h2>
         </div>
         <div id={style.tableBox}>
             <table >
                 <thead>
                     <tr>
                          <th id={style.center}>User Email</th>
                          <th id={style.center}>Exam Name</th>
                          <th id={style.center}>Exam Date</th>
                          <th id={style.center}>Result Status</th>
                          <th id={style.center}>Your Score</th>  
                          <th id={style.center}>Total Marks</th>
                          <th id={style.center}>Total Question</th>  
                     </tr>
                 </thead>
                 <tbody >
                 {
                     results.map((data , i) => {
                            //  if( data.user_email === sessionStorage.getItem("user"))
                                 return(
                                       <tr key={i}>
                                           <td>{data.user_email}</td>
                                           <td>{data.exam_name}</td>
                                           <td>{data.exam_date}</td>
                                           <td>{data.result_status}</td>
                                           <td>{data.result_score}</td>
                                           <td>{data.total_marks}</td>
                                           <td>{data.total_Question}</td>
                                       </tr>
                                 );

                                 return <React.Fragment key={i}></React.Fragment>
                             })
                         }

                 </tbody>
             </table>
         </div>
     </>
 );
}

export default StudentResult;