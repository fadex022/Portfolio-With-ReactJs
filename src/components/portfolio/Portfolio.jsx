import "./portfolio.scss"
import { useContext } from "react"
import { ThemeContext } from "../../context"

export default function Portfolio() {
  const theme = useContext(ThemeContext)

  const handleClick = ()=>{
      theme.dispatch({type: "TOGGLE"})
  }
  return (
      <div className="Portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className="slider">
          <div className="container">
            <div className="item" style={{backgroundColor: theme.state.darkMode ? "white" : "black", color: theme.state.darkMode ? "black" : "white"}}>
              <div className="left">
                <div className="imgcontainer">
                  <img src="assets/man.png" alt="" srcset="" />
                </div>
              </div>
              <div className="right">
                <div className="title">
                  Machine Learning: OCR
                </div>
                <div className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, obcaecati. Explicabo, deleniti assumenda reprehenderit dolor hic ipsum accusamus, fuga atque, ullam voluptatum possimus reiciendis saepe consectetur aspernatur cumque et iure?
                </div>
                <div className="technos">
                  <ul>
                    <li>Python</li>
                    <li>Pytorch</li>
                    <li>Pandas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
  )
}
