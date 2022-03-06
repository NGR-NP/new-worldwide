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
    const SvgIcon = require(`../../assets/${svg}`).default;
    return (
        <Rightblock>
            <img src={SvgIcon} alt="Service" />
        </Rightblock>
    );
};
export default SvgBlock;