import React, { FC } from "react";
import "./header.css";

type HeaderProps = object;

const Header: FC<HeaderProps> = () => {
  return (
    <div className={"header"}>
      <strong>home24</strong>
      <input placeholder={"Search"} />
    </div>
  );
};

export default Header;
