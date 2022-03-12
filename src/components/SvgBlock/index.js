import React from "react";
import styled from "styled-components";

const Rightblock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    widht: 40%;
    position: relative;
`;

const SvgBlock = ({ svg }) => {
    const Svgicon = require(`../../assets/${svg}`).default;
    return (
        <Rightblock>
            <img 
            src={Svgicon} alt="service" />
        </Rightblock>
    );
};
export default SvgBlock;