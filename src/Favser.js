
import Card from './Card';
import SeriesData from './SeriesData'
// const favSeries = 'amazon';

function Favser(){
    return (
        <Card
          key ={SeriesData[0].id}
          imgsrc = {SeriesData[0].imgsrc}
          title = {SeriesData[0].title}
          sname = {SeriesData[0].sname}
          link = {SeriesData[0].link}
          />);

}

export default Favser;