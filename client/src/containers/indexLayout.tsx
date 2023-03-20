import React, { FC, memo } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

type IndexLayoutProps = object;

const IndexLayoutContainer = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 160px auto auto;
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
    margin: 6px;

    > * {
        padding: 10px;
    }
`;

const Content = styled.div`
    grid-area: content;
    grid-column: span 2;
`;

const IndexLayout: FC<IndexLayoutProps> = () => {
    return (
        <IndexLayoutContainer>
            <Header />
            <Sidebar />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </IndexLayoutContainer>
    );
};

export default memo(IndexLayout);
