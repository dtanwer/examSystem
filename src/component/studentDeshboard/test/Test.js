

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from './Test.module.css'
import Qcard from "./questionCard/Qcard";

function Test() {
    const [allQuestions, setAllQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [quesPerPage] = useState(1);

    const { examId } = useParams();
    const navigate = useNavigate();



    const [exam, setExam] = useState({});
    const [user, setUser] = useState({});
    const [score, setScore] = useState(0);

    const useGetUserID = () => {
        return window.localStorage.getItem("userID");
    };


    const userId = useGetUserID();

    useEffect(() => {
        async function getAllQuestions() {
            let value = await axios.get(`https://examsystem-api.vercel.app/question/${examId}`);
            setAllQuestions(value.data);
        }

        const getUser = async () => {
            const data = await axios.get(`https://examsystem-api.vercel.app/auth/${userId}`);
            setUser(data.data);
        }
        const getExam = async () => {
            const data = await axios.get(`https://examsystem-api.vercel.app/exam/${examId}`);
            setExam(data.data);
        }
        getUser();
        getExam();
        getAllQuestions();
    }, [examId, userId]);

   useEffect(()=>{
    console.log(score);
   },[score])

    async function submitTest(x) {
        // const total_Question=allQuestions.length
        // const scoreInpercent=Math.floor((score/total_Question)*100);
        let status = "";
        if (score >= exam.examPassingMarks) status = "Pass";
        else status = "Fail";



        var date = new Date();
        var d = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        var t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        let data = {
            "resultStatus": status,
            "resultScore": score,
            "userId": userId,
            "examId": examId,
            "userName": user.username,
            "userEmail": user.userEmail,
            "examName": exam.examName,
            "examDate": d + t
        };
        console.log(data);

        await axios.post("https://examsystem-api.vercel.app/result", data);
        alert("Exam Submited !!!");
        navigate('/student/');

    }




    /////Pagination/////
    // Get current posts
    const indexOfLastQuestion = currentPage * quesPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - quesPerPage;
    const currQuestion = allQuestions?.slice(indexOfFirstQuestion, indexOfLastQuestion);


    // Change page
    const paginate = quesNumber => setCurrentPage(quesNumber);

    return (
        <div className={style.mainTest}>

            <div className={style.heading}>
                <h3>Answer the Question</h3>
            </div>
            {
                currQuestion.map((data, i) => {
                    return (<div className={style.qCard} key={i}>
                    <Qcard data={data} totalQuestion={allQuestions?.length} paginate={paginate} score={score} setScore={setScore} currentPage={currentPage} submitTest={submitTest} />
                    </div>)

                }


                )
            }

        </div>
    );
}

export default Test