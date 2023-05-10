import style from './Dashboard.module.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Cards from './cards/Cards';
import std from '../../../images/student.png';
import qAndA from '../../../images/qandA.png';
import exm from '../../../images/exam.png';

function Dashboard() {

    const [exam, setExam] = useState("Updating...");
    const [question, setQuestion] = useState("Updating...");
    const [user, setUser] = useState("Updating...");

    useEffect(() => {
        async function getAllExam() {
            let value = await axios.get("https://examsystem-api.vercel.app/exam");
            setExam("We have total " + value.data.length + " exam");
        }
        getAllExam();


        async function getAllQuestions() {
            let value = await axios.get("https://examsystem-api.vercel.app/question");
            setQuestion("We have total " + value.data.length + " question");
        }
        getAllQuestions();


        async function getAllUsers() {
            let value = await axios.get("https://examsystem-api.vercel.app/auth");
            setUser("We have total " + value.data.length + " user");
        }
        getAllUsers();
    })

    return (
        <>
            <div className={style.displayHeadingBox}>
                <h1>Admin<span>Dashboard</span></h1>
            </div>
            <div className={style.widgets}>
                <NavLink to='exam'><Cards data={exam} img_src={exm} /></NavLink>
                <NavLink to='question'> <Cards data={question} img_src={qAndA} /></NavLink>
                <NavLink to='studentList'> <Cards data={user} img_src={std} /></NavLink>
            </div>

        </>
    );
}

export default Dashboard;