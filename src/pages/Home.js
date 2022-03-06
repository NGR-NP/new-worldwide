import HeroSection from "../sections/hero";
import About from "../sections/about";
import Service from "../sections/services";
import Testimonials from "../sections/testimonials";
import Contact from "../sections/contact";
import styled from "styled-components";
import React from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Home = () => {
    return (
        <Container>
            <HeroSection />
            <About />
            <Service />
            <Testimonials />
            <Contact />
        </Container>
    );
};
export default Home;