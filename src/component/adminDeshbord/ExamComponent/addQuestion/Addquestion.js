import "../../subject/Subject.css";

import { useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";


function AddQuestion() {

    const {examId} = useParams();
    const [question, setQuestion] = useState({
        questionName: "",
        op1: "",
        op2: "",
        op3: "",
        op4: "",
        answer: "",
        examId:examId,
        subjectName: ""
    });

    function onInputChange(e) {
        setQuestion({
            ...question,
            [e.target.name]: e.target.value
        });
    }

    function handleGoBack() {
        alert("go back function");
    }
    
    
    async function addnewQuestion() {
        const res=await axios.post("https://examsystem-api.vercel.app/question/add", question);
        console.log(res.data);
    }



    return (
        <>
            <div id='displayHeadingBox'>
                <h2>Adding Question</h2>
            </div>

            <div id='addBox' className='addQuestion'>
                <label >Question Name </label>
                <input onChange={(e) => onInputChange(e)}
                    name="questionName"
                    type="text" placeholder="Enter Question" />

                <label >Enter Option A </label>
                <input onChange={(e) => onInputChange(e)}
                    name="op1"
                    type="text" placeholder="Enter Option A" />

                <label >Enter Option B</label>
                <input onChange={(e) => onInputChange(e)}
                    name="op2"
                    type="text" placeholder="Enter Option B" />

                <label >Enter Option C</label>
                <input onChange={(e) => onInputChange(e)}
                    name="op3"
                    type="text" placeholder="Enter Option C" />

                <label >Enter Option D</label>
                <input onChange={(e) => onInputChange(e)}
                    name="op4"
                    type="text" placeholder="Enter Option D" />

                <label >Enter Question Answer</label>
                <input onChange={(e) => onInputChange(e)}
                    name="answer"
                    type="text" placeholder="Enter Question answer (don't write option A,B,C,D)" />


                <label >Enter Subject</label>
                <input onChange={(e) => onInputChange(e)}
                    name="subjectName"
                    type="text" placeholder="Enter Subject" />

                <div id='buttonBox'>
                    <button onClick={addnewQuestion} >Add</button>
                    <button onClick={handleGoBack}>Go back</button>
                </div>

            </div>
        </>
    );
}

export default AddQuestion;