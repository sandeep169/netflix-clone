import React from 'react';

function Card(props){
    return <>
        {/* <div className="cards"> */}
            <div className="card">
                <img className="card_img" alt ="img_link" src={props.imgsrc}/>
                <div className="card_info">
                    <span className="card_category"> {props.title}</span>
                        <h3 className="card_title"> {props.sname}</h3>
                        <a href={props.link}>
                        <button className="card_button"> watch now</button>
                    </a>
                </div>
            </div>
        {/* </div> */}
    </>
}
export default Card;