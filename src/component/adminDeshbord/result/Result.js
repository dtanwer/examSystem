 
   import style from "../subject/Subject.css";
   import {useEffect , useState} from "react";
   import axios from 'axios'

   
   


    function Result(){

        const [results , setResults] = useState([]);

        useEffect(()=>{
           
           async function getAllResults(){
               let value = await axios.get("https://examsystem-api.vercel.app/result");
            //fetch all result from backend;
               setResults(value.data);
           }
               getAllResults();
        },[]);

        return (
            <>
               <div id='displayHeadingBox'> 
                   <h2>Exam List</h2>     
                </div>

                <div id='tableBox'>
                    <table>
                       <thead>
                           <tr>
                             {/* <th id="center">User Email</th>
                             <th id="center">Exam Name</th>
                             <th id="center">Exam Date</th> */}
                             <th id="center">Result Status</th>
                             <th id="center">Your Score</th>  
                             {/* <th id="center">Total Marks</th>
                             <th id="center">Total Question</th>   */}
                          </tr>
                        </thead>
                        <tbody>
                            {
                                results.map((data , i) => {
                                    return(
                                          <tr key={i}>
                                              {/* <td>{data.user_email}</td>
                                              <td>{data.exam_name}</td>
                                              <td>{data.exam_date}</td> */}
                                              <td>{data.resultStatus}</td>
                                              <td>{data.resultScore}</td>
                                              {/* <td>{data.total_marks}</td>
                                              <td>{data.total_Question}</td> */}
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

    export default Result;