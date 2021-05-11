import React from 'react';
import Card from './Card'
import SeriesData from './SeriesData';
import './App.css';

function Amazon(){
    return <>
    <div className="web_series_container">
    <Card 
    // key = {SeriesData[0].id}
    imgsrc={SeriesData[0].imgsrc}
    title = {SeriesData[0].title}
    sname = {SeriesData[0].sname}
    link = {SeriesData[0].link}
    />
   
  <Card 
    // key = {SeriesData[1].id}
    imgsrc={SeriesData[1].imgsrc}
    title = {SeriesData[1].title}
    sname = {SeriesData[1].sname}
    link = {SeriesData[1].link}
    />
    </div>
</>
}
export default Amazon;