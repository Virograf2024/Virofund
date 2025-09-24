import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-nav">
        <div className="footer-logo">
          <Image src="/svgs/logo.svg" width={50} height={50} alt="logo" />
          <p className="footer-title">Virofund</p>
        </div>
        <div className="footer-logo">
          <Image src="/svgs/gmail.svg" width={30} height={30} alt="gmail" />
          <a href="mailto:virograf2024@gmail.com" className="footer-link">
            virograf2024@gmail.com
          </a>
        </div>
        <div className="footer-logo">
          <Image src="/svgs/phone.svg" width={30} height={30} alt="gmail" />
          <p className="footer-link">+234 816 312 2231,</p>{" "}
          <p className="footer-link">+234 816 312 2231</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
