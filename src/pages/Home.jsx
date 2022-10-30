import React from 'react';

import NavbarComponent from '../Components/NavbarComponent';
import Hero from '../Components/Hero';
import OurServices from '../Components/OurServices';
import WhyUs from '../Components/WhyUs';
import Testimonial from '../Components/Testimonial';
import Banner from '../Components/Banner';
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        // test
        <>
            <NavbarComponent />
            <Hero />
            <OurServices />
            <WhyUs />
            <Testimonial />
            <Banner />
            <Faq />
            <Footer />
        </>
    );
};

export default Home;
