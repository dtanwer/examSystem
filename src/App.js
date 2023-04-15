import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AdminDashboard from './component/adminDeshbord/AdminDeshboard';
import AdminLogin from './component/adminLogin/AdminLogin';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import Dashboard from './component/adminDeshbord/deshbord/Dashboard';
import Subject from './component/adminDeshbord/subject/Subject';
import StudentList from './component/adminDeshbord/studentList/StudentList';
import Exam from './component/adminDeshbord/ExamComponent/Exam';
import Question from './component/adminDeshbord/question/Question';
import Result from './component/adminDeshbord/result/Result';
import ViewQuestion from './component/adminDeshbord/ExamComponent/viewQuestion/ViewQuestion';
import AddQuestion from './component/adminDeshbord/ExamComponent/addQuestion/Addquestion';
import Details from './component/adminDeshbord/ExamComponent/details/Details';
import StudentDashboard from './component/studentDeshboard/StudentDashboard';
import Test from './component/studentDeshboard/test/Test';
import StudentExam from './component/studentDeshboard/Exam/StudentExam';
import StudentResult from './component/studentDeshboard/Result/StudentResult';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/student/' element={<StudentDashboard/>}>
          <Route path='' element={<StudentExam/>}/>
          <Route path='test/:examId' element={<Test/>}/>
          <Route path='result' element={<StudentResult/>}/>
        </Route>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/admin/' element={<AdminDashboard/>}>
          <Route path='' element={<Dashboard/>}/>
          <Route path='subject' element={<Subject/>}/>
          <Route path='exam' element={<Exam/>}/>
          <Route path='exam/details/:examId' element={<Details/>}/>
          <Route path='exam/addquestion/:examId' element={<AddQuestion/>}/>
          <Route path='exam/viewquestion/:examId' element={<ViewQuestion/>}/>
          <Route path='question' element={<Question/>}/>
          <Route path='result' element={<Result/>}/>
          <Route path='studentList' element={<StudentList/>}>
          <Route path='studentList/result' element={<Result/>}/>
            
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
