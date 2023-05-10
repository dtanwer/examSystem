 
   import {useEffect , useState} from "react";
   import axios from 'axios';
   import { useParams } from "react-router-dom";
   import style from '../ExamComponent/table.module.css'

   
   


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
               <div className={style.mainHead}> 
                   {userId?(<h1> {results[0]?.userName} Result <span> List</span></h1>):(<h1>Result <span>List</span></h1>)}   
                </div>

                <div id='tableBox'>
                    <table className={style.examtb}>
                       <thead>
                           <tr  className={style.tbhad}>
                             <th >User Email</th>
                             <th >User Name</th>
                             <th >Exam Name</th>
                             <th >Exam Date</th>
                             <th >Your Score</th>  
                             <th >Result Status</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                results.map((data , i) => {
                                    return(
                                          <tr key={i} className={style.tbody}>
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