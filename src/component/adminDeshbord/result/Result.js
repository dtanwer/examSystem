 
   import  "../subject/Subject.css";
   import {useEffect , useState} from "react";
   import axios from 'axios';
   import { useParams } from "react-router-dom";

   
   


    function Result(){

        let { userId } = useParams();
        if(userId)
        {

            console.log("i m not null ");
        }


        const [results , setResults] = useState([]);

        useEffect(()=>{
           
           async function getAllResults(){
               let value = await axios.get(userId?`https://examsystem-api.vercel.app/result/${userId}`:"https://examsystem-api.vercel.app/result");
            //fetch all result from backend;
               setResults(value.data);
           }
               getAllResults();
        },[]);
        return (
            <>
               <div id='displayHeadingBox'> 
                   {userId?(<h2>Result List {results[0]?.userName}</h2>):(<h2>Result List</h2>)}   
                </div>

                <div id='tableBox'>
                    <table>
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
                        <tbody>
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

    export default Result;