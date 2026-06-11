import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Header.style.scss'

export default function Header() {
    return(
        <header>
            <Link to="/" className="logo">Foodieland<span className="logo-red">.</span></Link>
            <ul className="header-nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link>Recipes</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Contact</Link></li>
                <li><Link>About us</Link></li>
            </ul>
            <ul className="header-social">
                <li ><a  href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li ><a href="https://x.com/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li ><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
        </header>
    )
}