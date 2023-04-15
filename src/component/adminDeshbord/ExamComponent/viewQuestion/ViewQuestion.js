import "../../subject/Subject.css";
import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

import axios from "axios";

function ViewQuestion() {

    //  ---------------------- add Subject & close buttton working  -------------------------------------

    const [display, setDisplay] = useState({
        display: "none"
    });

    function handleEditQuestion(questionId) {
        setDisplay({ display: "block" });
        setDataInInputField(questionId);
    }

    function handleClose() {
        setDisplay({ display: "none" });
    }

       const {examId} = useParams();

    //  ---------------------- Fetching All Questions -------------------------------------

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function getAllQuestions(){
          let value = await axios.get(`https://examsystem-api.vercel.app/question/${examId}`);
          // get question of exam id type only i will change during routhing
          setQuestions(value.data);
        } 
        getAllQuestions();
    },[])


    //  ---------------------- handling text field -------------------------------------

    const [updatedQ, setUpdatedQ] = useState({
        questionName: "",
        op1: "",
        op2: "",
        op3: "",
        op4: "",
        answer: "",
        examId: "",
        subjectName: ""
    });


    function onTextFieldChange(e) {
        setUpdatedQ({
            ...updatedQ,
            [e.target.name]: e.target.value
        })
    }





    //  ---------------------- Showing data in text field -------------------------------------

    // Id of current question clicked
    const [qId, setQId] = useState();


    function setDataInInputField(questionId) {
        setQId(questionId);

        //    for(let i=0; i<questions.length ; i++)
        //    {
        //        if( parseInt( questions[i].id) === parseInt( questionId )) {
        //            setUpdatedQ(questions[i]);
        //        }
        //    }
    }
    // -----------------------------------------------------------------------------------------

    const [check, setCheck] = useState();


    async function updateQuestion() {
        // await axios.put(`http://localhost:3333/question/${qId}` , updatedQ);
        //update question api
        setCheck(true);
    }

    // ----------------------------------------------------------------------------------------

    // let history = useHistory();

    function handleGoBack() {
        alert("go back function");
    }
    // ----------------------------------------------------------------------------------------

    const [d, setD] = useState();

    async function deleteQuestion(id) {
        //    await axios.delete(`http://localhost:3333/question/${id}`);
        alert('delete function');
        setD(true);
    }


    if (check) return <ViewQuestion />;

    if (d) return <ViewQuestion />;



    return (
        <>
            <div id='displayHeadingBox'>
                <h2>Question List</h2>
            </div>

            <div id='tableBox'>
                <table>
                    <thead >
                        <tr>
                            <th id='center'>Question Name</th>
                            <th id='center'>Option one</th>
                            <th id='center'>Option two</th>
                            <th id='center'>Option three</th>
                            <th id='center'>Option four</th>
                            <th id='center'>Question Answer</th>
                            <th id='center'>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            questions.map((data, i) => {
                                //first check question blong to exam or not exam id in question 
                                return (
                                    <tr key={i}>
                                        <td>{data.questionName}</td>
                                        <td>{data.op1}</td>
                                        <td>{data.op2}</td>
                                        <td>{data.op3}</td>
                                        <td>{data.op4}</td>
                                        <td>{data.answer}</td>
                                        <td>
                                            <button onClick={() => handleEditQuestion(data._id)}>Edit</button>
                                            <button onClick={() => deleteQuestion(data._id)}>Delete</button>
                                        </td>
                                    </tr>
                                );

                                return <React.Fragment key={i}></React.Fragment>
                            })
                        }

                    </tbody>
                </table>
            </div>

            <div id='addSubjectBox'>
                <button onClick={handleGoBack}>Go Back</button>
            </div>


            <div id='addBox' style={display}>

                <label>Enter Question </label>
                <input value={updatedQ.question_name}
                    onChange={(e) => onTextFieldChange(e)}
                    name="question_name"
                    type="text" placeholder="Enter Question " />

                <label >Enter Option A </label>
                <input value={updatedQ.option_one}
                    onChange={(e) => onTextFieldChange(e)}
                    name="option_one"
                    type="text" placeholder="Enter Option A" />

                <label >Enter Option B </label>
                <input value={updatedQ.option_two}
                    onChange={(e) => onTextFieldChange(e)}
                    name="option_two"
                    type="text" placeholder="Enter Option B" />

                <label >Enter Option C </label>
                <input value={updatedQ.option_three}
                    onChange={(e) => onTextFieldChange(e)}
                    name="option_three"
                    type="text" placeholder="Enter Option C" />

                <label >Enter Option D </label>
                <input value={updatedQ.option_four}
                    onChange={(e) => onTextFieldChange(e)}
                    name="option_four"
                    type="text" placeholder="Enter Option D" />

                <label >Enter Question Answer </label>
                <input value={updatedQ.question_answer}
                    onChange={(e) => onTextFieldChange(e)}
                    name="question_answer"
                    type="text" placeholder="Enter Answer" />

                <label >Enter Subject </label>
                <input value={updatedQ.subject_name}
                    onChange={(e) => onTextFieldChange(e)}
                    name="subject_name"
                    type="text" placeholder="Enter Subject" />

                <div id='buttonBox'>
                    <button onClick={updateQuestion} >Update Question</button>
                    <button onClick={handleClose} >Close</button>
                </div>
            </div>
        </>
    );
}

export default ViewQuestion;