

import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "./Result.module.css"
function StudentResult() {
    const [results, setResults] = useState([]);
    const useGetUserID = () => {
        return window.localStorage.getItem("userID");
    };

    const userId = useGetUserID();

    useEffect(() => {
        async function getAllResults() {
            let value = await axios.get(`https://examsystem-api.vercel.app/result/${userId}`);
            setResults(value.data);
        }
        getAllResults();
    }, [userId]);


    return (
        <div className={style.mainResultDiv}>

                <h1> <span>My</span>Result</h1>
            <div className={style.tableBox}>
                <table className={style.restable} > 
                    <thead>
                        <tr className={style.resHad}>
                             <th className={style.center}>User Email</th>
                             <th className={style.center}>User Name</th>
                             <th className={style.center}>Exam Name</th>
                             <th className={style.center}>Exam Date</th>
                             <th className={style.center}>Your Score</th>  
                             <th className={style.center}>Result Status</th>
                          </tr>
                    </thead>
                    
        
                    <tbody >
                        {
                            results.map((data, i) => {
                                return (
                                    <tr key={i} className={style.resbody}>
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
                <div className={style.btm}></div>
            </div>
        </div>
    );
}

export default StudentResult;