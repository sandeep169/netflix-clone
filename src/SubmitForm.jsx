import React, { useState } from 'react';

function SubmitForm() {
    const [name, callEvent] = useState('');
    const [fullName, setFullName] = useState();

    const inputEvent = (event) => {
        callEvent(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
    }
    return (<>
        <form>
            <div className='web_series_container'>
                {/* <h1>Submit Form {name}</h1> */}
                <h1>Submit Form {fullName}</h1>

                <input type="text" placeholder='enter your name' name = 'firstName'  onChange={inputEvent} />
                <input type="text" placeholder='enter password' name="lastName"  onChange={inputEvent}/>
                <button className='' onClick={onSubmit}>Submit</button>
            </div>
        </form>
    </>
    );
}
export default SubmitForm;