import axios from "axios";
import style from '../ExamComponent/table.module.css';


import { useEffect, useState } from "react";

function Question() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        async function getAllQuestions() {
            const value = await axios.get("https://examsystem-api.vercel.app/question");
            setQuestions(value.data);
        }
        getAllQuestions();
    }, [])



    return (
        <>
            <div className={style.mainHead}>
                <h1>Question <span>List</span></h1>
            </div>
            <table className={style.examtb}>
                    <thead>
                        <tr className={style.tbhad}>
                            <th >Question Name</th>
                            <th>Option one</th>
                            <th>Option two</th>
                            <th>Option three</th>
                            <th>Option Four</th>
                            <th>Question Answer</th>
                            <th>Subject Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            questions.map((data, i) => {
                                return (
                                    <tr key={i} className={style.tbody}>
                                        <td>{data.questionName}</td>
                                        <td>{data.op1}</td>
                                        <td>{data.op2}</td>
                                        <td>{data.op3}</td>
                                        <td>{data.op4}</td>
                                        <td>{data.answer}</td>
                                        <td>{data.subjectName}</td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
        </>
    );
}

export default Question;