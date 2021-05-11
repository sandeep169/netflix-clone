import React from 'react';
import Card from './Card'
import SeriesData from './SeriesData';

function Netflix(){
    return<>
    <Card 
        key = {SeriesData[0].id}
        imgsrc={SeriesData[0].imgsrc}
        title = {SeriesData[0].title}
        sname = {SeriesData[0].sname}
        link = {SeriesData[0].link}
    />
    </>

}
export default Netflix;