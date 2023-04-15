import "../subject/Subject.css";
import axios from "axios";


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
            <div id='displayHeadingBox'>
                <h2>Question List</h2>
            </div>

            <div id='tableBox'>
                <table>
                    <thead>
                        <tr>
                            <th id='center'>Question Name</th>
                            <th id='center'>Option one</th>
                            <th id='center'>Option two</th>
                            <th id='center'>Option three</th>
                            <th id='center'>Option Four</th>
                            <th id='center'>Question Answer</th>
                            <th id='center'>Subject Name</th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>
                        {
                            questions.map((data, i) => {
                                return (
                                    <tr key={i}>
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
            </div>
        </>
    );
}

export default Question;