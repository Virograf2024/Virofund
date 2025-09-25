import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <section className="footer-container">
      <footer className="footer" role="contentinfo">
        <section className="footer-nav">
          <div className="margin">
            <div className="footer-logo">
              <Image
                src="/svgs/logo.svg"
                width={70}
                height={70}
                alt="Virofund logo"
              />
              <p className="footer-title">Virofund</p>
            </div>
            <p>By Virograf</p>
          </div>
          <div className="footer-item">
            <Image
              src="/svgs/gmail.svg"
              width={20}
              height={20}
              alt=""
              aria-hidden="true"
            />
            <a href="mailto:virograf2024@gmail.com" className="footer-link">
              virograf2024@gmail.com
            </a>
          </div>
          <div className="footer-item">
            <Image
              src="/svgs/phone.svg"
              width={20}
              height={20}
              alt=""
              aria-hidden="true"
            />
            <div className="footer-logo">
              <p className="footer-link">+234 816 312 2231,</p>{" "}
              <p className="footer-link">+234 916 159 1763</p>
            </div>
          </div>
          <div className="footer-finale">
            <a href="#features" className="footer-link">
              Features
            </a>
            <a href="#how-it-works" className="footer-link">
              How it works
            </a>
            <a href="#waitlist" className="footer-link">
              Join the waitlist
            </a>
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
    </section>
  );
}

export default Footer;
