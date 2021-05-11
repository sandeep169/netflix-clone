import React, { useState } from 'react';
 
function DigitalTime (){
    let [initialTime,setTime]=useState(new Date().toLocaleTimeString());
    let updateTime = ()=>{setTime(new Date().toLocaleTimeString())};
    setInterval(updateTime,1000);
    return<>
    <h1>{initialTime}</h1>
    </>
}
export default DigitalTime;