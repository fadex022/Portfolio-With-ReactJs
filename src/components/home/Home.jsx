import "./home.scss"
import MouseIcon from '@material-ui/icons/Mouse';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Home() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Développeur Fullstack", "Créateur d'Apps Androids Natives"]
    })

  }, []);
  
  return (
    <div className="Home" id="home">
      <div className="intro">
        <div className="left">
          <div className="imageContainer">
            <img src="assets/man.png" alt="Fadel Bidiga" srcset="" className="me"/>
            <img src="assets/blob.png" alt="A blob" srcset="" className="blob"/>
          </div>
        </div>
        <div className="rigth">
          <div className="wrapper">
            <h2>Salut, je suis</h2>
            <h1>Fadel Bidiga</h1>
            <h3> <span ref={textRef}></span></h3>
          </div>
          
        </div>
      </div>
      
      <a href="#portfolio">
          <MouseIcon className="mouse"/>
          scroll
      </a>
    </div>
  )
}
