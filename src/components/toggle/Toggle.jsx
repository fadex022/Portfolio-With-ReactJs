import { useContext } from "react"
import { ThemeContext } from "../../context"
import "./toggle.scss"

export default function Toggle() {
    const theme = useContext(ThemeContext)

    const handleClick = ()=>{
        theme.dispatch({type: "TOGGLE"})
    }
    return (
        <div className="Toggle" onClick={handleClick} style={{backgroundColor: theme.state.darkMode ? "black" : "white"}}>
            <img src='/assets/sun.png' alt="" className="t-icon" />
            <img src='/assets/moon.png' alt="" className="t-icon" />
            <div className="t-button"  style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    )
}
