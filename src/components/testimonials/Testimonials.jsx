import "./testimonials.scss"
import { Twitter, YouTube } from "@material-ui/icons";
import { useContext, useState } from "react"
import { ThemeContext } from "../../context"


export default function Testimonials() {
  const theme = useContext(ThemeContext)

  return (
      <div className="Testimonials" id="testimonials">
        <h1>Témoignages</h1>
        <div className="container">
          <div className="card">
            <div className="top">
              <img src="assets/man.png" alt="profile picture" className="user" />  
              <div className="social">
                <Twitter  className="item" style={{color: theme.state.darkMode ? "white" : "black"}}/>     
                <YouTube  className="item"  style={{color: theme.state.darkMode ? "white" : "black"}}/>  
              </div>   
            </div>
            <div className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut, excepturi nemo odio perferendis sapiente vero.</div>
            <div className="bottom">
              <h3>Lecam</h3>
              <h4>Senior dev</h4>
            </div>
          </div>
        </div>
      </div>
  )
}
