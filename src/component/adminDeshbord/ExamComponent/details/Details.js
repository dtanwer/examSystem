import "../../subject/Subject.css";

import {useEffect , useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

 
 function Details(){
     
     const {examId} = useParams();
     console.log(examId);

     const [exam  , setExam] = useState({});

     useEffect(() => {
       
          async function getExamDetails(){
             const value = await axios.get(`https://examsystem-api.vercel.app/exam/${examId}`);
             setExam(value.data);
          }
          getExamDetails();
     },[examId])

// -------------------------Go back function---------------------------------------
  

 
   function handleGoBack(){
      alert("go back function");
   }


     return (
         <>
             <div id='displayHeadingBox'> 
                  <h2>Exam Details</h2>     
              </div>

              <div id='tableBox'>
                  <table >
                      <thead >
                           <tr>
                             <th id='center'>Exam Name</th>
                             <td id='center'> {exam.examName} </td>
                          </tr>

                           <tr>
                             <th id='center'>Exam Description</th>
                             <td id='center'> {exam.examDes} </td>
                           </tr>

                            <tr>
                               <th id='center'>Exam Creation Date</th>
                               <td id='center'> {exam.examDate} </td>
                            </tr>

                            <tr>
                               <th id='center'>Exam TotalMarks</th>
                               <td id='center'> {exam.examMarks} </td>
                            </tr>

                            <tr>
                               <th id='center'>Exam TotalQuestion</th>
                               <td id='center'> {exam.examTotalQuestion} </td>
                            </tr>

                            <tr>
                               <th id='center'>Exam PassMarks</th>
                               <td id='center'> {exam.examPassingMarks} </td>
                            </tr>

                            <tr>
                               <th id='center'>Exam Level</th>
                               <td id='center'> {exam.examLevel} </td>
                            </tr>
                         </thead>
                      </table>
                  </div>

                 <div id='addSubjectBox'>
                    <button onClick={handleGoBack}>Go Back</button>
                </div>
         </>
     );
 }

 export default Details;