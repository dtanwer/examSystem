import "./Subject.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function Subject() {

    //  ---------------------- add Subject & close buttton working  -------------------------------------
    const [display, setDisplay] = useState({
        display: "none"
    });

   const handleAddSubject=()=> {
        setDisplay({ display: "block" });
    }

    const handleCloseAdd= ()=> {
        setDisplay({ display: "none" });
    }

    const notify = ()=>{
 
        toast('Subject Delected!');
    }

    // --------------- Fetching all subjects from db.json file-------------------------

    const [subjects, setSubjects] = useState([]);


    useEffect(() => {

        async function getAllSubject() {
            let value = await axios.get("https://examsystem-api.vercel.app/subject");
            setSubjects(value.data);
            //  console.log(value.data[0].subject_name);
        }
        getAllSubject();
    }, []);
    // --------------------Adding Subject And re-render subject component-----------------

    const [subject, setSubject] = useState({
        subject: "",
    });

    function handleInput(e) {
        setSubject({
            subject: e.target.value
        });
    }


    async function handleAddNewSubject() {
        const res=await axios.post('https://examsystem-api.vercel.app/subject/add',subject);
        alert("New Subject Added!");
        console.log(res);
        setStatus(true);
    }

    const [status, setStatus] = useState();



    // ------------------------Deleting Subject and reload component------------------------------

    async function deleteSubject(id) {
        await axios.delete(`http://localhost:3002/subject/delete/${id}`);
        notify();
        setTimeout(() => {
            setStatusDelete(true);
        }, 3000);
        
    }

    const [statusDelete, setStatusDelete] = useState();


    if (statusDelete) return <Subject />;

    if (status) return <Subject />;

    // -------------------------------------------------------

    if (subjects.length === 0) return (
        <>
            <div id='content'>

                <div id='displayHeadingBox'>
                    <h2>No Subject Available</h2>
                </div>

                <div id='addSubjectBox'>
                    <button onClick={handleAddSubject}>Add Subject</button>
                </div>

                {/* Add Subject */}

                <div id='addBox' style={display} >
                    <label htmlFor="">Enter Subject </label>
                    <input onChange={(e) => handleInput(e)} type="text" placeholder="Enter Subject name" />

                    <div id='buttonBox'>
                        <button onClick={handleAddNewSubject}  >Add</button>
                        <button onClick={handleCloseAdd} >Close</button>
                    </div>
                </div>

            </div>
        </>
    );

    return (
        <>

            <div id='content'>
                <div id='displayHeadingBox'>
                    <h2>Subject List</h2>
                    <ToastContainer />
                </div>

                <div id='tableBox'>
                    <table >
                        <thead>
                            <tr>
                                <th id='center'>Subject Name</th>
                                <th id='center'>Options</th>
                            </tr>
                        </thead>
                        <tbody id='tbody'>
                            {
                                subjects.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{data.subject}</td>
                                            <td><button onClick={() => deleteSubject(data._id)}>Delete</button></td>
                                        </tr>
                                    );

                                })
                            }


                        </tbody>
                    </table>
                </div>

                <div id='addSubjectBox'>
                    <button onClick={handleAddSubject}>Add Subject</button>
                </div>

                {/* Add Subject */}


                <div id='addBox' style={display} >
                    <label htmlFor="">Enter Subject </label>
                    <input onChange={(e) => handleInput(e)} type="text" placeholder="Enter Subject name" />

                    <div id='buttonBox'>
                        <button onClick={handleAddNewSubject}  >Add</button>
                        <button onClick={handleCloseAdd} >Close</button>
                    </div>
                </div>

            </div>




        </>
    );
}

export default Subject;