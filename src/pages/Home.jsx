import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Recipe from '../components/Recipe'
import LearnMore from '../components/LearnMore'
import InstagramPosts from '../components/InstagramPosts'
import Deliciousness from '../components/Deliciousnes'
import Footer from '../components/Footer'


export default function Home() {
    return(
        <div>
             <Hero /> 
             <Categories /> 
             <Recipe />
             <LearnMore />
             <InstagramPosts />
             <Recipe />
             <Deliciousness />
             <Footer />
        </div>
    )
}