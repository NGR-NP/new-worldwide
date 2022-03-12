import React from 'react'
import styled from 'styled-components';
// import SvgBlock from '../../components/SvgBlock';
import TextBlock from '../../components/TextBlock';
import Svgicon1 from '../../assets/Design.svg';
import Svgicon2 from '../../assets/Develope.svg';
import Svgicon3 from '../../assets/Support.svg';
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";


const ServicesSecion = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20rem;
    position: relative;
    color: var(--white);
`;
const Background = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 85vh;
    background-color: var(--black);
    background-size: auto 100vh;
    z-index: -1;
`;
const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
    margin-top: 1rem;
    position: relative;
    &::before{
        content: "";
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 2px solid var(--pink);
        transform: translate(-50%);
    }
`;
const Line = styled.span`
    border-left: 4px solid var(--white);
    height: 15rem;
    margin-top: 2rem;
    border-radius: 20px 20px 0 0;
`;
const Triangle = styled.span`
    width: 0;
    height: 0;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-top: 2rem solid var(--background);
`;
const Content = styled.div`
display: flex;
margin: 3rem 10rem;
// margin: 10rem 10rem;
align-items: center;
justify-content: space-between;
`;
const Rightblock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    widht: 40%;
    position: relative;
`;
const OBJ = styled.div`
    
`;
const Services = () => {
    return (
        <ServicesSecion>
            <Background>
                <Title>What We Do</Title>
                <Line />
                <Triangle />
            </Background>
            <Content>
                <TextBlock
                    topic="Design"
                    title="We build award winning Designs"
                    subText="we help clints to build great design to attract more customers"
                />
                <OBJ>
                    <img src={Tube} alt="service" width="400" height="400" />
                </OBJ>
                <Rightblock>
                    <img
                        src={Svgicon1} alt="service" />
                </Rightblock>
                {/* <SvgBlock svg="Design.svg" /> */}
            </Content>
            <Content>
                <TextBlock
                    topic="Design"
                    title="We build award winning Designs"
                    subText="we help clints to build great design to attract more customers"
                /><Rightblock>
                    <img
                        src={Cone} alt="service" />
                </Rightblock>
                <Rightblock>
                    <img
                        src={Svgicon2} alt="service" />
                </Rightblock>
                {/* <SvgBlock svg="Design.svg" /> */}
            </Content>
            <Content>
                <TextBlock
                    topic="Design"
                    title="We build award winning Designs"
                    subText="we help clints to build great design to attract more customers"
                />
                <Rightblock>
                    <img
                        src={Capsule} alt="service" />
                </Rightblock>
                <Rightblock>
                    <img
                        src={Svgicon3} alt="service" />
                </Rightblock>
                {/* <SvgBlock svg="Design.svg" /> */}
            </Content>
        </ServicesSecion>
    );
};
export default Services;