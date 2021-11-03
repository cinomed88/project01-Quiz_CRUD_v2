import { withRouter } from 'react-router-dom';
import reactIcon from '../../../imgs/react.png';
import nodejsIcon from '../../../imgs/nodejs.png';
import mongodbIcon from '../../../imgs/mongodb.png';

function LandingPage(props) {

  return (
    <div className="App">
      <h2 style={{margin:"10%"}}>This is a simple quiz app using React, Node.js, and mongoDB.</h2>
                  
      <div className="img-wrap">
        <img className="reactIcon" src={reactIcon} alt="react Icon" />
        <span>+</span>
        <img className="nodeIcon" src={nodejsIcon} alt="Nodejs Icon" />
        <span>+</span>
        <img className="mongodbIcon" src={mongodbIcon} alt="MongoDB Icon" />
      </div>
    </div>
  )
}

export default withRouter(LandingPage)
