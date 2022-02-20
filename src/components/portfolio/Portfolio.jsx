import "./portfolio.scss"
export default function Portfolio() {
  return (
      <div className="Portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          <li className="active">Vedette</li>
          <li>Site Web</li>
          <li>Application Mobile</li>
          <li>Script Automatique</li>
        </ul>

        <div className="container">
          <div className="item">
            <img src="assets/classification.jpeg" alt="" srcset="" />
            <h3>IA de classification</h3>
          </div>
          <div className="item">
            <img src="assets/classification.jpeg" alt="" srcset="" />
            <h3>IA de classification</h3>
          </div>
          <div className="item">
            <img src="assets/classification.jpeg" alt="" srcset="" />
            <h3>IA de classification</h3>
          </div>
        </div>
      </div>
  )
}
