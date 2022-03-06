import React from 'react'
import styled from 'styled-components';
const LeftBlock = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    width; 50%;
    line-height: 1.5;
    color: var(--white);
    @media only Screen and (max-width: 48em){
        width: 100%;
        text-align: center;
        align-items: center;
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
const TextBlock = ({ topic, title, subText, children }) => {
    return (
        <LeftBlock>
            <Topic>
                <Circle /><span>{topic}</span>
            </Topic>
            <Title>{title}</Title>
            <SubText>{subText}</SubText>
            {children}
        </LeftBlock>
    );
};
export default TextBlock;