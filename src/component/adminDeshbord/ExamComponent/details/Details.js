
import {useEffect , useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import style from '../table.module.css';

 
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
             <div className={style.mainHead}> 
                  <h1>Exam <span>Details</span></h1>     
              </div>

              <table className={style.examtb}>
                      <thead >
                           <tr className={style.tbody}>
                             <th>Exam Name</th>
                             <td> {exam.examName} </td>
                          </tr>

                           <tr className={style.tbody}>
                             <th id='center'>Exam Description</th>
                             <td id='center'> {exam.examDes} </td>
                           </tr>

                            <tr className={style.tbody}>
                               <th id='center'>Exam Creation Date</th>
                               <td id='center'> {exam.examDate} </td>
                            </tr>

                            <tr className={style.tbody}>
                               <th id='center'>Exam TotalMarks</th>
                               <td id='center'> {exam.examMarks} </td>
                            </tr>

                            <tr className={style.tbody}>
                               <th id='center'>Exam TotalQuestion</th>
                               <td id='center'> {exam.examTotalQuestion} </td>
                            </tr>

                            <tr className={style.tbody}>
                               <th id='center'>Exam PassMarks</th>
                               <td id='center'> {exam.examPassingMarks} </td>
                            </tr>

                            <tr className={style.tbody}>
                               <th id='center'>Exam Level</th>
                               <td id='center'> {exam.examLevel} </td>
                            </tr>
                         </thead>
                      </table>
                 {/* <div id='addSubjectBox'>
                    <button onClick={handleGoBack}>Go Back</button>
                </div> */}
         </>
     );
 }

 export default Details;