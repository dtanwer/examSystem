
  
  import "../../subject/Subject.css";
  import React, {useState} from "react";


     function Student(){

      

         const [email , setEmail] = useState("abc@gmail.com");

         const[result , setResult] = useState([
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

      


    

        function handleGoBack(){ 
            alert("go back fun")
        }

         return (
              <>
               <div id='displayHeadingBox'> 
                   <h2>Student Exam List</h2>     
                </div>

                <div id='tableBox'>
                    <table>
                       <thead>
                          <tr>
                             <th  id='center'>User Email</th>
                              <th id='center'>Exam Name</th>
                              <th id='center'>Exam Date</th>
                              <th id='center'>Result Status</th>
                              <th id='center'>Total Marks</th>
                              <th id='center'>Result Score</th>  
                           </tr>
                        </thead>
                        <tbody>
                        {
                                result.map((data , i) => {
                                    // if(data.user_email === email)
                                    return(
                                          <tr key={i}>
                                              <td>{data.user_email}</td>
                                              <td>{data.exam_name}</td>
                                              <td>{data.exam_date}</td>
                                              <td>{data.result_status}</td>
                                              <td>{data.result_score}</td>
                                              <td>{data.total_marks}</td>
                                          </tr>
                                    );
                                })
                            }
                               
                        </tbody>
                     </table>
                </div>

                 <div id='addSubjectBox'>
                       <button onClick={handleGoBack}>Go Back</button>
                 </div>
              </>
         );
     }

     export default Student;