"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  return (
    <nav className="header">
      <div className="logo">
        <Image
          src="/Group 264 (1).png"
          alt="Virofund Logo"
          width={150}
          height={70}
          className="logo-img"
        />
      </div>
      <div className="nav-children desktop">
        <a href="#how-it-works" className="nav-child">
          How it works
        </a>
        <a href="#waitlist" className="nav-child">
          Wait list
        </a>
        <a href="#contact" className="nav-child">
          Contact us
        </a>
      </div>
      <div className="desktop product nav-product">View Product</div>

      <div className="hamburger" onClick={() => setIsShown(!isShown)}>
        <Image
          src="/hamburger-menu-svgrepo-com.svg"
          className="img"
          width={50}
          height={50}
          alt="hamburger menu"
        />
      </div>
      {isShown && <Sidebar cancel={() => setIsShown(false)} />}
    </nav>
  );
}

export default Navbar;
