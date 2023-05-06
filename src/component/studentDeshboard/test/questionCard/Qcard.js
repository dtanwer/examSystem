import React, { useRef } from 'react'
import './Qcard.css'
import { useState } from 'react'


export default function Qcard({data,totalQuestion,paginate,currentPage,score,setScore,submitTest}) {
    const inputRef = useRef(null);
    const handelNext= async ()=>{
        if(radiobtn && data?.answer === radiobtn?.target.value)
        {
            await setScore((score+1))
        }
        if(currentPage<totalQuestion)
        {
            if(radiobtn)
            {
                radiobtn.target.checked=false;
            }
            paginate(currentPage+1);
        }
        else
        {
            submitTest();
        }
    }

    const handelPrev=()=>
    {
        if(currentPage>1)
        paginate(currentPage-1)
    }
    // const [isAns,setisAns]=useState(false);
    const [radiobtn,setRadiobtn]=useState();
    var isAns=false;
    function onRadioButtonChange(e) {
         setRadiobtn(e);

    }
    return (
        <div className="Qbox">
            <div className="question">
                <h3>Question:{currentPage} {data.questionName}</h3>
            </div>
            <form className="options">
                <input type="radio" name="op" id='op1' value={data.op1}  onChange={(e) => onRadioButtonChange(e,currentPage-1)}/>
                <label className="element-animation1" htmlFor="op1">
                    {data.op1}
                </label>
                <input type="radio" name="op" id='op2' onChange={(e) => onRadioButtonChange(e,currentPage-1)} value={data.op2} />
                <label className="element-animation2" htmlFor="op2" >
                    {data.op2}
                </label>
                <input type="radio" name="op" id='op3' onChange={(e) => onRadioButtonChange(e,currentPage-1)} value={data.op3} />
                <label className="element-animation3" htmlFor="op3">
                  { data.op3}
                </label>
                <input type="radio" name="op" id='op4'  onChange={(e) => onRadioButtonChange(e,currentPage-1)} value={data.op4}/>
                <label className="element-animation4" htmlFor="op4">
                    {data.op4}
                </label>
            </form>
            <div className='btns'>
                {/* <button onClick={handelPrev}>Prev</button> */}
               { totalQuestion===currentPage?
                <button className='finish' onClick={handelNext}>Finish</button>:
                <button onClick={handelNext}>Next</button>}
            </div>
        </div>
    )
}
