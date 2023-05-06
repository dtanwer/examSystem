

import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./StudentExam.module.css";

function StudentExam() {

    const [allExam, setAllExam] = useState([]);

    useEffect(() => {
        async function getAllExams() {
            let value = await axios.get("https://examsystem-api.vercel.app/exam");
            setAllExam(value.data);
        }
        getAllExams();
    }, [])

    return (
        <div className={style.mainExamDiv}>
            
            <h1> <span>All</span>Tests</h1>
            <div className={style.exam}>
                {
                    allExam.map((data, i) => {
                        return (
                            <div className={style.box} key={i}>
                                <div className={style.examName}> <h3>{data.examName}</h3> </div>
                                <div className={style.list}>

                                    <p>Exam Level: {data.examLevel}</p>
                                    <p>Total Question: {data.examTotalQuestion}</p>
                                    <p>Total Marks: {data.examMarks}</p>
                                    <p>Total Marks: {data.examMarks}</p>
                                </div>
                                <div className={style.exambtn}>
                                    <NavLink  to={`test/${data._id}`}>
                                        <button  className={style.button32}>Go to Exam</button>
                                    </NavLink>
                                </div>
                            </div>

                        );

                    })
                }
            </div>
        </div>
    );
}
export default StudentExam;