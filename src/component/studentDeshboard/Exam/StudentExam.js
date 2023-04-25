

import axios from "axios";
import React, { useState, useEffect } from "react";
import {NavLink } from "react-router-dom";

 import "../StudentDashboard.css";

function StudentExam() {

    const [allExam, setAllExam] = useState([]);

    useEffect(() => {
        async function getAllExams() {
            let value = await axios.get("https://examsystem-api.vercel.app/exam");
            console.log(value.data);
            setAllExam(value.data);
        }
        getAllExams();
    }, [])

    return (
        <>
            <div id='displayBoxHeadingBox'>
                <h1>All category Exam</h1>
            </div>
            {
                allExam.map((data, i) => {
                    return (
                        <div id='displayBoxExamBox' key={i}>
                            <div id='div5'> <span>{data.examName}</span> </div>
                            <div id='div5'>
                              <NavLink exact to={`test/${data._id}`}>
                                 <button>Go to Exam</button>
                               </NavLink>
                            </div>
                        </div>
                    );

                    return <React.Fragment key={i}></React.Fragment>

                })
            }
        </>
    );
}
export default StudentExam;