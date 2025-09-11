import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span>Virofund</span>
      </div>
      <div>
        <div className="footer-contact" id="contact">
          <span className="icon">📧</span>
          <a href="mailto:virofund@gmail.com">virofund@gmail.com</a>
        </div>
        <div className="footer-contact">
          <span className="icon">📞</span>
          <span>+234 816 312 2231, +234 816 312 2231</span>
        </div>
        <div className="socials">
          <Image
            src="/linkedin-svgrepo-com.svg"
            alt="LinkedIn Logo"
            width={30}
            height={30}
          />
          <Image
            src="/whatsapp-svgrepo-com.svg"
            alt="Whatsapp Logo"
            width={30}
            height={30}
          />
          <Image
            src="/twitter-svgrepo-com.svg"
            alt="Twitter Logo"
            width={30}
            height={30}
          />
        </div>
        {/* Copyright */}
        <p className="footer-copy">©ViroFund 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
