import React from 'react'
import styled, { keyframes } from 'styled-components';
import Pink from "../../assets/blobPink.png";
import White from "../../assets/blob white.png";
import Purple from "../../assets/blob purple.png";
import Arrow from "../../assets/Arrow Right.svg";
import Mobilesvg from "../../assets/mobile.svg";




const Herosection = styled.div`
    width: 100vw;
    height: 45vw;
    color: var(--white);
    background-color: var(--black);
    display: flex;
    justify-content: center;
    
    position: relative;
    @media only Screen and (max-width: 48em){
        height: 70vw;
        display: block;
    }
    @media only Screen and (max-width: 420px){
        height: auto;
        padding-bottom: 2rem;
    }
`;
const Blobs = styled.div`
    width:100%;
    right: 0;
    position: absolute;
    @media only Screen and (max-width: 48em){
        opacity: 0.5;
    }
`;
const PinkBlob = styled.div`
    width: calc(15% + 15vw);
    position: absolute;
    right: 0;
    top: calc(5rem + 5vw);
    z-index: 6;
`;
const WhiteBlob = styled.div`
    width: calc(20% + 20vw);
    position: absolute;
    right: calc(3.5rem + 3.5vw);
    top: calc(2rem + 2vw);
    z-index: 5;
`;
const PurpleBlob = styled.div`
    width: calc(10% + 10vw);
    position: absolute;
    right:0;
    
`;
const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;
    @media only Screen and (max-width: 48em){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;}
`;
const LeftBlock = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    width; 50%;
    line-height: 1.5;
    @media only Screen and (max-width: 48em){
        width: 80%;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        margin-top: calc(2.5rem + 2.5vw);
        filter: drop-shadow(2px 4px 6px var(--black));

    }


`;
const Topic = styled.div`
dispaly: flex;
justify-content: center;
align-items: center;
background-color: var(--nav);
font-weight: 700;
font-size: calc(0.4rem + 0.4vw);
padding: 0.5rem 1rem;
border-radius: 20px;
`;
const Circle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--purple);
    margin-right: 0.5rem;

`;
const Title = styled.h1`
    font-size: calc(2rem + 1vw);
    line-hight: 1.2;
    padding: 0.5rem 0;
`;
const SubText = styled.h5`
    font-size: calc(0.5rem + 0.5vw);
    color: var(--nav2);
`;
const CTA = styled.button`
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: calc(0.5rem + 0.5vw);
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
   
    &:hover{
        transform: scale(1.1);
    } 
    &:active{
        transform: scale(0.9);
    }
    img{width: 1.5rem;}
`;
const move = keyframes`
    0%{transform: translateY(-5px);}
    50%{ transform: translateY(10px);}
    100%{transform: translateY(-5px);}
`;
const MobileSvg = styled.img`
    z-index: 7;
    max-width: 100%;
    width: calc(30% + 20vw);
    height: auto;
    animation: ${move} 2.5s ease infinite;
    @media only Screen and (max-width: 48em){
        align-self: flex-start;
        position: absolute;
        bottom: o;
        opacity: 0.5;

    }
    @media only Screen and (max-width: 40em){
        display: none;
    }
`;



const HeroSection = () => {
    return <Herosection>
        <Blobs>
            <PinkBlob>
                <img src={Pink} alt="pink blob" width="400" height="400" />
            </PinkBlob>
            <WhiteBlob>
                <img src={White} alt="white blob" width="400" height="400" />
            </WhiteBlob>
            <PurpleBlob>
                <img src={Purple} alt="purple blob" width="400" height="400" />

            </PurpleBlob>
        </Blobs>
        <MainContent>
            <LeftBlock>
                <Topic>
                    <Circle /><span>we build web</span>
                </Topic>
                <Title>Transforming your digital presence</Title>
                <SubText>we help fast growing companies build award winning websites</SubText>
                <CTA>
                    get in touch &nbsp; <img src={Arrow} alt="cta" width="400" height="400" />
                </CTA>
            </LeftBlock>
            <MobileSvg src={Mobilesvg} alt="mobile svg" width="400" height="400" />
        </MainContent>
    </Herosection>
};
export default HeroSection;