import "./menu.scss"
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"Menu " + ( menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(!menuOpen)}>
                <a href="#home">Home</a>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
                <a href="#projects">Réalisation</a>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
                <a href="#testimonials">Témoignages</a>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
        <h4 className="mention">build with <FavoriteIcon style={{color: "red", margin: "2px"}}/> and reactjs</h4>
    </div>
  )
}
