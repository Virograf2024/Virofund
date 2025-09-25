import React from "react";
import Image from "next/image";
import Link from "next/link";
//import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footer-nav">
          <div className="footer-logo">
            <Image src="/svgs/logo.svg" width={70} height={70} alt="logo" />
            <p className="footer-title">Virofund</p>
          </div>
          <div className="footer-item">
            <Image src="/svgs/gmail.svg" width={20} height={20} alt="gmail" />
            <a href="mailto:virograf2024@gmail.com" className="footer-link">
              virograf2024@gmail.com
            </a>
          </div>
          <div className="footer-item">
            <Image src="/svgs/phone.svg" width={20} height={20} alt="gmail" />
            <article className="footer-logo">
              <p className="footer-link">+234 816 312 2231,</p>{" "}
              <p className="footer-link">+234 816 312 2231</p>
            </article>
          </div>
          <div className="footer-finale">
            <p>How it works</p>
            <p>Vision</p>
            <p>Founders</p>
          </div>
        </section>
      </footer>
      <div className="footer-bottom-container">
        <div className="footer-bottom">
          <p className="copyright">&copy;Virograf {new Date().getFullYear()}</p>
          <div className="footer-bottom-links">
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Legal Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
