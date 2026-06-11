import './LearnMore.style.scss'

export default function LearnMore() {
    return (
        <section className="learn">
            <div className="learn-left">
                <h1>Everyone can be a <br />
                chef in their own kitchen</h1>
                <p>We believe everyone can be a great chef in their own kitchen. <br /> Enjoy our collection of easy, reliable recipes that are quick to prepare and full of <br /> wonderful flavors.</p>
                <button>Learn More</button>
            </div>
            <div className="learn-right">
                <img src="/public/assets/learn-more.svg" alt="" />
            </div>
        </section>
    )
}