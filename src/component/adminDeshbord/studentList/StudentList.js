import "../subject/Subject.css";
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";


function StudentList() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function getAllStudent() {
            let value = await axios.get("https://examsystem-api.vercel.app/auth");
            //fatch all student 
            
            setStudents(value.data);
        }
        getAllStudent();
    }, [])

    return (
        <>
            <div id='displayHeadingBox'>
                <h2>Student List</h2>
            </div>

            <div id='tableBox'>
                <table>
                    <thead>
                        <tr>
                            <th id='center'>User Name</th>
                            <th id='center'>User Email</th>
                            <th id='center'>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.username}</td>
                                        <td>{data.userEmail}</td>
                                        <td>
                                        <NavLink to={`result/${data._id}`}><button>View Result</button></NavLink>
                                        </td>
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

export default StudentList;