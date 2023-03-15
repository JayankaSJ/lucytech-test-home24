import React, { FC, memo } from "react";
import { Outlet } from "react-router";

import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

import "./indexLayout.css";

type IndexLayoutProps = object;

const IndexLayout: FC<IndexLayoutProps> = () => {
  return (
    <div className={"page"}>
      <Header />
      <Sidebar />
      <div className={"content"}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default memo(IndexLayout);
