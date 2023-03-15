import React, { FC } from "react";
import "./footer.css";

type FooterProps = object;

const Footer: FC<FooterProps> = () => {
  return (
    <div className={"footer"}>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
      Versandkosten.
    </div>
  );
};

export default Footer;
