import './WorkCardStyles.css';

import WorkCard from './WorkCard';
import workCardData from '../data/WorkCardData';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                workCardData.map((item, index) => (
                    <WorkCard key={index} imgsrc={item.imgsrc} title={item.title} text={item.text} view={item.view} source={item.source}/>
                ))
            }
        </div>
    </div>
  )
}

export default Work;