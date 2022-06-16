import React from 'react';
import '../../App.css';
import Cards from '../Cards/Cards';
import HeroSection from '../Hero/Hero';
import Footer from '../Footer';




const Home = () => {
    return (
        <div>
            <Hero />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home