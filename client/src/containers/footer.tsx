import React, { FC } from "react";
import styled from "styled-components";

type FooterProps = object;

const FooterContainer = styled.div`
    grid-area: footer;
    background-color: lightblue;
    text-align: center;
`;

const Footer: FC<FooterProps> = () => {
    return (
        <FooterContainer>
            Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
            Versandkosten.
        </FooterContainer>
    );
};

export default Footer;
