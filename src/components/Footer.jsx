import { Link } from "react-router-dom"
import './Footer.style.scss'

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-logo">
                <Link to="/" className="logo">Foodieland<span className="logo-red">.</span></Link>
                <p>Simple recipes for everyday cooking. No fuss, just flavor.</p>
            </div>
            <div className="footer-nav">
                <ul>
                    <li><Link>Recipes</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link>About us</Link></li>
                </ul>
            </div>
            </div>
            <hr />
            <div className="footer-botom">
                <h3>© 2024 Deliciousness. Made with love and a pinch of salt</h3>
            </div>
        </footer>
    )
}