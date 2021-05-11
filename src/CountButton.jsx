import React, { useState } from 'react';
import './index.css';

// let cTime = new  Date().toLocaleTimeString();
//count button is component ...inside this i have to declare hook.. inside component not outside
function CountButton(){
    // const state = useState();
     //its a array which return (state(currentValue),updatedData/fn) in useState arg passed is initial data/value ,,, usestate(5) its a initial value ,,const const [count,setCount] so count is current value and (setCount(100); ) setCount is  UPDATED VALUE when button will clicked this value will take place.. if i write setCount(count+5) then value will increase by 5 on every button press 
    // console.log(state);// will show  undefined and function(setCount)

    let [count,setCount] =useState(0); //The *destructuring assignment* syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
    const IncNumber =  ()=>{
        setCount(++count);
        console.log(count);
    };
    
    // const [newTime,setTime] = useState(new  Date().toLocaleTimeString());
    // const changeTime=()=>{

    //     setTime(new Date().toLocaleTimeString());
    //     // or we can use
    //     // newTime= new Date().toLocaleTimeString();
    //     console.log(newTime);
    // }
return<>
<div className="count-btn">
    {/* <h1 className="btn-h1">{newTime}</h1>
    <button className="btn" onClick={changeTime}> Click Me</button> */}
    <h1 className="btn-h1">{count}</h1>
    <button className="btn" onClick={IncNumber}> Click Me</button>
    </div>
</>
}
export default CountButton;