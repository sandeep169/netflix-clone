import React from 'react';
import Card from './Card';
import SeriesData from './SeriesData'
import Netflix from './Netflix';
import Amazon from './Amazon';
import CountButton from './CountButton';
import DigitalTime from './DigitalTime';
import SubmitForm from './SubmitForm';
import LoginForm from './LoginForm';


var favSeries = 'amazon';

const App = ()=> {
  return <>
   <DigitalTime/>
   {/* <LoginForm/> */}
   <SubmitForm/>
    
    <h1 className="heading_style"> List of 5 best Netflix Series</h1>
    {/* (version 1.2.1) methodology */}
    {/* <div className="web_series_container">
    //->card is  user build tag, where i have created self attribute img title link sname. it will pass this attribute to the function defined above by name cards.. 
       <Cards
         imgsrc ='./images/Bard_of_Blood_poster.jpg'
        title ='A Netflix Series'
        link ="https://www.netflix.com/in/title/80115328"
        sname = "Dark"
      />
      </div> */}

      {/* //map method used  to display stored  all value like for loop */}
      {/* fat arrow function is used  we have to put it inside curley braces as it is holding a value, variable and we have to put inside {} to use the variables so i put the SeriesData inside {}*/}
      <div className="web_series_container">
      {SeriesData.map((val) => {
        return (<Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />);
      })
      }
      </div>

      {/* update (2.1) :=>>> function is defined after **export default app**
      now i am using if else fn  as user fav series (amazon or netflix) */}

      {/* this user build tag it will call function created above */}
      {/* using normal function */}

    {/* <FatArrowFavSeries/> */}

    {/*using ternary operator to short our code of if else:::===>>  */}
    <p className='heading_style'> ****using ternary operator to short our code of if else*** </p>
    {favSeries === 'amazon' ? <Amazon /> : <Netflix />}
    <CountButton/>
    

  </>
}
export default App;

//******** Function and jsx file name should start wid capital otherwise it babel won't run that fn nd file code********/

// (versionn 1.2.1)
// without using fat arrow function
// function Cards(props){
//   return (
//     <div className="cards">
//             <div className="card">
//                 <img className="card_img" alt ="img_link" src={props.imgsrc}/>
//                 <div className="card_info">
//                     <span className="card_category"> {props.title}</span>
//                         <h3 className="card_title"> {props.sname}</h3>
//                         <a href={props.link}>
//                         <button className="card_button"> watch now</button>
//                     </a>
//                 </div>
//             </div>
//         </div>
//   );
// }

//version 2.1 // methodolgy // using if else for fav amazon or netflix

 
/*
function FavSeries() {
  if (favSeries === 'amazon')
    return <Amazon />
  else {
    return <Netflix />
  }
}
 */

//using fat arrow fn 
/* const FatArroFavSeries = ()=>{if(favSeries==='amazon')
  return <Amazon/>
  else{
    return<Netflix/>
  } }
*/