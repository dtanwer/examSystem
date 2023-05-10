import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import style from '../ExamComponent/table.module.css';


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
            <div className={style.mainHead}>
                <h1>Student <span>List</span></h1>
            </div>
            <table className={style.examtb}>
                    <thead>
                        <tr className={style.tbhad} >
                            <th id='center'>User Name</th>
                            <th id='center'>User Email</th>
                            <th id='center'>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((data, i) => {
                                return (
                                    <tr key={i} className={style.tbody}>
                                        <td>{data.username}</td>
                                        <td>{data.userEmail}</td>
                                        <td>
                                        <NavLink to={`result/${data._id}`} ><button className='mybtn viewBtn'>View Result</button></NavLink>
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
        </>
    );
}

export default StudentList;