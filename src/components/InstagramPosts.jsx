import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './InstagramPosts.style.scss'

export default function InstagramPosts() {
    return (
        <section className="instagramPosts">
            <div className="inst-logo">
                <h1>Check out @foodieland on Instagram</h1>
                <p>Follow @foodieland on Instagram to discover new simple recipes, step-by-step guides, and plenty <br />
                 of delicious inspiration for your home cooking.</p>
            </div>
            <div className="inst-cards">
                <div className="inst-card">
                    <img src="/assets/instPost/1.svg" alt="" />
                </div>
                <div className="inst-card">
                    <img src="/assets/instPost/2.svg" alt="" />
                </div>
                <div className="inst-card">
                    <img src="/assets/instPost/3.svg" alt="" />
                </div>
                <div className="inst-card">
                    <img src="/assets/instPost/4.svg" alt="" />
                </div>
            </div>
            <button>Visit Our Instagram <FontAwesomeIcon icon={faInstagram} /></button>
        </section>
    )
}