import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
   <> 
   {/* to create new file jsx file i have to create it with captial word so that babel compiler could understand its jsx file
   and then after it will run otherwise not */}
   <App />
   </>,
  document.getElementById('root')
);