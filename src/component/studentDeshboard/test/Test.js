

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "../StudentDashboard.css";

function Test() {

    // ---------------------------------------------------------
    const { examId } = useParams();
    const navigate=useNavigate();


    const [allQuestions , setAllQuestions] = useState([]);
    const [exam , setExam] = useState({});
    const [user , setUser] = useState({});

    const keys = new Map([]);
    const crossCheck = new Map([]);
    let score = 0;

    const useGetUserID= ()=>{
        return window.localStorage.getItem("userId");
      };
      
      
      const userId=useGetUserID();

    useEffect(() => {
        async function getAllQuestions(){
            let value = await axios.get(`https://examsystem-api.vercel.app/question/${examId}`);
            setAllQuestions(value.data);
        }

        const getUser= async ()=>{
            const data=await axios.get(`https://examsystem-api.vercel.app/auth/${userId}`);
            setUser(data.data);
        }
        const getExam= async ()=>{
            const data=await axios.get(`https://examsystem-api.vercel.app/exam/${examId}`);
            setExam(data.data);
        }
        getUser();
        getExam();
        getAllQuestions();
    },[examId,userId]);

    function onRadioButtonChange(e,i){

        if(keys.get(i)===e.target.value)
        {
            crossCheck.set(i,true);
            score++;
            console.log(score);
        }
        else
        {
            if(crossCheck.get(i))
            {
                score--;
                crossCheck.set(i,false);
                console.log(score);
            }

        }
      
       
    }

    let count = 0;

    

    async function submitTest()
    {
        // const total_Question=allQuestions.length
        // const scoreInpercent=Math.floor((score/total_Question)*100);
        let status = "";
         if(score >= exam.examPassingMarks ) status="Pass";
         else status = "Fail";

         

        var date = new Date();
        var d =  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() ;
        var t =  date.getHours() + ":" + date.getMinutes() +  ":" + date.getSeconds() ;
   
       let data={
        "resultStatus":status,
        "resultScore":score,
        "userId":userId,
        "examId":examId,
        "userName":user.username,
        "userEmail":user.userEmail,
        "examName":exam.examName,
        "examDate":d+t
       };
       console.log(data);
 
        await axios.post("https://examsystem-api.vercel.app/result",data);
        alert("Exam Submited !!!");
        navigate('/student/');
        
    }

    return (
        <>
            <div id='displayBoxQuestionHeadingBox'>
                <h1>Answer all the questions</h1>
            </div>
            {
                 
                allQuestions.map((data , i) => {
                        count++;
                        keys.set(i,data.answer);
                    return (
                        <div id='displayBoxQuestionBox' key={i}>
                        <div id='divQuestion'> <span>{data.questionName}</span> </div>
        
                        <div>
                            <input onChange={(e) => onRadioButtonChange(e,i)} value={data.op1}
                            id='option1' name={"answer"+count}   type="radio" />  
                            <label htmlFor="option1">{data.op1}</label>
                        </div>
        
                        <div>
                            <input  onChange={(e) => onRadioButtonChange(e,i)} value={data.op2}
                            id='option2' name={"answer"+count} type="radio" /> 
                            <label htmlFor="option2">{data.op2}</label>
                        </div>
        
                        <div>
                            <input   onChange={(e) => onRadioButtonChange(e,i)} value={data.op3}
                            id='option3' name={"answer"+count}  type="radio" /> 
                            <label htmlFor="option3">{data.op3}</label>
                        </div>
        
                        <div>
                            <input   onChange={(e) => onRadioButtonChange(e,i)} value={data.op4}
                            id='option4' name={"answer"+count}  type="radio" /> 
                            <label htmlFor="option4">{data.op4}</label>
                        </div>
                    </div>
                    );
                })
            }
            <div id='submitExam'><button onClick={submitTest}>Submit Exam</button></div>
        </>
    );
}

export default Test