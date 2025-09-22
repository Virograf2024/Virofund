import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span>Virofund</span>
      </div>
      <div>
        <div className="footer-contact" id="contact">
          <span className="icon">📧</span>
          <a href="mailto:Virograf2024@gmail.com"> virograf2024@gmail.com</a>
        </div>
        <div className="footer-contact">
          <span className="icon">📞</span>
          <span>+234 916 660 1771, +234 703 416 5005</span>
        </div>
        <div className="socials">
          <Link
            href="https://www.linkedin.com/company/virograf-inc/"
            target="_blank"
          >
            <Image
              src="/linkedin-svgrepo-com.svg"
              alt="LinkedIn Logo"
              width={30}
              height={30}
            />
          </Link>
          <Link href="https://x.com/virograf?t=qulOxaKJWHwqOTznLEiQbg&s=08">
            <Image
              src="/twitter-svgrepo-com.svg"
              alt="Twitter Logo"
              width={30}
              height={30}
            />
          </Link>
        </div>
        {/* Copyright */}
        <p className="footer-copy">©ViroFund 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
