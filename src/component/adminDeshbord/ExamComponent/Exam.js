import style from "../subject/Subject.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink,useNavigate } from "react-router-dom";



function Exam() {
    const navigate=useNavigate();
    //  ---------------------- add Exam & close buttton working  -------------------------------------
    const [display, setDisplay] = useState({
        display: "none"
    });

    function handleAddExam() {
        setDisplay({ display: "block" });
    }

    function handleCloseExam() {
        setDisplay({ display: "none" });
    }

    // --------------- Fetching all Exam from db.json file-------------------------

    const [exams, setExams] = useState([]);

      useEffect(()=>{

         async function getAllExam(){
             let value = await axios.get("https://examsystem-api.vercel.app/exam");
            setExams(value.data);
            //console.log(value.data);
         }
             getAllExam();
      },[]);


    // --------------------Adding Exam And re-render Exam component-----------------

    var date = new Date();
    var d = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    var t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const [exam, setExam] = useState({
        
        examName: "",
        examDes: "",
        examLevel: "",
        examPassingMarks: "",
        examTotalQuestion: "",
        examMarks: "",
        examDate: d + " " + t
    });

    function handleInput(e) {
        setExam({
            ...exam,
            [e.target.name]: e.target.value
        });
    }

    async function handleAddNewExam() {
        try {
            const res=await axios.post('https://examsystem-api.vercel.app/exam/add',exam);
            console.log(res);
            alert("exam added");
        } catch (err) {
            console.log(err);
        }
        setStatus(true);
    }

    const [status, setStatus] = useState();


    // ----------------------------Deleting Exam-----------------------------------------------

    const [questions, setQuestions] = useState([]);

    // useEffect(() => {
    //     async function getAllQuestions() {
    //         alert("geting all questions");
    //         //setQuestions(value.data);
    //     }
    //     getAllQuestions();
    // }, [])


    const [statusDeleteExam, setStatusDeleteExam] = useState();


    async function deleteExam(id) {
       
        try {
            await axios.delete(`https://examsystem-api.vercel.app/exam/delete/${id}`)
            alert("exam Delete successfully  ");
        } 
        catch (err) {
            console.log(err);
        }
        setStatusDeleteExam(true);
    }

    if (status) return <Exam />

    if (statusDeleteExam) return <Exam />

    return (
        <>
            <div id='displayHeadingBox'>
                <h2>Exam List</h2>
            </div>

            <div id='tableBox'>
                <table >
                    <thead >
                        <tr>
                            <th id={style.center}>Exam Name</th>
                            <th id={style.center}>Exam Desc.</th>
                            <th id={style.center}>Exam Creation Date</th>
                            <th id={style.center}>Exam Level</th>
                            <th id={style.center}>Options</th>
                        </tr>
                    </thead>
                    <tbody id={style.tbody}>
                        {
                            exams.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.examName}</td>
                                        <td>{data.examDes}</td>
                                        <td>{data.examDate}</td>
                                        <td>{data.examLevel}</td>
                                        <td>
                                            <NavLink to={`details/${data._id}`}>
                                                <button>Details</button>
                                            </NavLink>

                                            <NavLink to={`viewquestion/${data._id}`} >
                                                <button>View Question</button>
                                            </NavLink>

                                            <NavLink to={`addquestion/${data._id}`}>
                                                <button>Add Question</button>
                                            </NavLink>

                                            <button onClick={() => deleteExam(data._id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>

            <div id='addSubjectBox'>
                <button onClick={handleAddExam}>Add Exam</button>
            </div>

            <div id='addBox' style={display}>
                <label htmlFor="">Enter Subject Name </label>
                <input onChange={(e) => handleInput(e)} name="examName" type="text"
                    placeholder="Enter Subject Name" />

                <label htmlFor="">Enter Exam desc </label>
                <input onChange={(e) => handleInput(e)} name="examDes" type="text"
                    placeholder="Enter Exam des" />

                <label htmlFor="">Enter Exam Level </label>
                <input onChange={(e) => handleInput(e)} name="examLevel" type="text" placeholder="Enter Exam Level" />

                <label htmlFor="">Enter Total Question </label>
                <input onChange={(e) => handleInput(e)} name="examTotalQuestion"
                    type="text" placeholder="Enter Total Question" />

                <label htmlFor="">Enter Total Marks </label>
                <input onChange={(e) => handleInput(e)} name="examMarks"
                    type="text" placeholder="Enter Total Marks" />

                <label htmlFor="">Enter Pass Marks </label>
                <input onChange={(e) => handleInput(e)} name="examPassingMarks"
                    type="text" placeholder="Enter Pass Marks"/>

                <div id='buttonBox'>
                    <button onClick={handleAddNewExam} >Add</button>
                    <button onClick={handleCloseExam}  >Close</button>
                </div>
            </div>
        </>
    );
}

export default Exam;