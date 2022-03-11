import "./skills.scss"

export default function Skills() {
  return (
      <div className="Skills" id="skills">
        <h1>Skills</h1>
        <div className="container">
          <div className="image" style={{top: "80px"}}>
            <img className="img" src="assets/python.png" alt="python logo" srcset="" />  
          </div>  
          <div className="image">
            <img className="img" src="assets/android.png" alt="android logo" srcset="" />  
          </div>  
          <div className="image" style={{top: "100px"}}> 
            <img className="img" src="assets/kotlin.png" alt="kotlin logo" srcset="" />   
          </div>  
          <div className="image"> 
            <img className="img" src="assets/fastapi.png" alt="fast api logo" srcset="" />   
          </div> 
          <div className="image" style={{top: "100px"}}> 
            <img className="img" src="assets/postgres.png" alt="Postgresql logo" srcset="" />   
          </div> 
          <div className="image"> 
            <img className="img" src="assets/sass.png" alt="Sass logo" srcset="" />   
          </div> 
          <div className="image" style={{top: "50px"}}> 
            <img className="img" src="assets/javascript.png" alt="javascript logo" srcset="" />   
          </div> 
          <div className="image" > 
            <img className="img" src="assets/react.png" alt="React logo" srcset=""/>   
          </div> 
        </div>
      </div>
  )
}
