

import axios from "axios";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../StudentDashboard.css";

function Test() {

    // ---------------------------------------------------------
    let { examId } = useParams();
    // let { category } = useParams();

    const [allQuestions , setAllQuestions] = useState([]);



    useEffect(() => {
        async function getAllQuestions(){
            let value = await axios.get(`https://examsystem-api.vercel.app/question/${examId}`);
            console.log(value.data);
            setAllQuestions(value.data);
        }
        getAllQuestions();
    },[]);

    // ---------------------------------------------------------
    
    // const [userAnswer , setUserAnswer] = useState({
    //     answer1:"",
    //     answer2:"",
    //     answer3:"",
    // });

    const [answer , setAnswer] = useState({
        answer1:"",
        answer2:"",
        answer3:"",
        answer4:"",
        answer5:"",
    });


    let  correctAnswer  = [] ;
    
    function onRadioButtonChange(e){
       setAnswer({
            ...answer, 
            [e.target.name] : e.target.value
    });
      
       
    }

    let count = 0;

    


    async function submitTest()
    {
        for(let i=0; i<allQuestions.length ;i++)
        {
            correctAnswer.push( allQuestions[i].question_answer);
        }


        // console.log(answer);
        // console.log(correctAnswer);

        let score = 0;
        let status = "";

        
            if(correctAnswer[0] === answer.answer1) score++;
            if(correctAnswer[1] === answer.answer2) score++;
            if(correctAnswer[2] === answer.answer3) score++;
            if(correctAnswer[3] === answer.answer4) score++;
            if(correctAnswer[4] === answer.answer5) score++;
        
        // console.log(score);
  
         if(score >= 3) status="Pass";
         else status = "Fail";

        


        var date = new Date();
        var d =  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() ;
        var t =  date.getHours() + ":" + date.getMinutes() +  ":" + date.getSeconds() ;
   
       let data={
         "result_status": status,
         "result_score": score,
         "user_email":sessionStorage.getItem("user"),
         "exam_date": d+" "+t,
         "exam_name": "category",
         "total_marks": "5",
         "exam_id": "id",
         "total_Question": "5"
       };
 
        // await axios.post("http://localhost:3333/result" , data);
        // history.push("/StudentDashboard/Result");
    }

    //  let history = useHistory();

    return (
        <>
            <div id='displayBoxQuestionHeadingBox'>
                <h1>Answer all the questions</h1>
            </div>
            {
                 
                allQuestions.map((data , i) => {
                    // if(parseInt( data.exam_id ) === parseInt(id)){
                        count++;
                    return (
                        <div id='displayBoxQuestionBox' key={i}>
                        <div id='divQuestion'> <span>{data.questionName}</span> </div>
        
                        <div>
                            <input onChange={(e) => onRadioButtonChange(e)} value={data.option_one}
                            id='option1' name={"answer"+count}   type="radio" />  
                            <label htmlFor="option1">{data.op1}</label>
                        </div>
        
                        <div>
                            <input onChange={(e) => onRadioButtonChange(e)} value={data.option_two}
                            id='option2' name={"answer"+count} type="radio" /> 
                            <label htmlFor="option2">{data.op2}</label>
                        </div>
        
                        <div>
                            <input onChange={(e) => onRadioButtonChange(e)} value={data.option_three}
                            id='option3' name={"answer"+count}  type="radio" /> 
                            <label htmlFor="option3">{data.op3}</label>
                        </div>
        
                        <div>
                            <input onChange={(e) => onRadioButtonChange(e)} value={data.option_four}
                            id='option4' name={"answer"+count}  type="radio" /> 
                            <label htmlFor="option4">{data.op4}</label>
                        </div>
                    </div>
                    );
                //   }
                  return <React.Fragment key={i}></React.Fragment>
                })
            }
            <div id='submitExam'><button onClick={submitTest}>Submit Exam</button></div>
        </>
    );
}

export default Test