// import Resumepic from "path to resume image from image folder within source folder"
import resume from "../Image/UCF_Resume.png"
function Resume() {
    return (
      <div className='aboutstyle'>
        <h1>Resume</h1>
        <h2>Download my Resume <a href={resume} download>Here</a></h2>
        <img src={resume} style={{ height: "200vh", boxShadow: "0 0 1000px rgba(0, 0, 0, 0.5)", borderRadius: "80px"}}/>
      </div>
    );
  }
  export default Resume
  
  