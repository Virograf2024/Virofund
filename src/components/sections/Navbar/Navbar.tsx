"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import Button from "@/components/button/Button";

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  return (
    <nav className="header border">
      <div className="logo border">
        <Image
          src="/Group 264 (1).png"
          alt="Virofund Logo"
          width={150}
          height={70}
          className="logo-img"
        />
        {/* <p>By Virograf</p> */}
      </div>
      <div className="nav-children desktop border">
        <a href="#features" className="nav-child">
          Features
        </a>
        <a href="#how-it-works" className="nav-child">
          How it works
        </a>
        <a href="#waitlist" className="nav-child">
          Join the waitlist
        </a>
      </div>
      <div className="nav-child desktop border">
        <Button isDisabled={true} text="View Product" hasImage={false} />
      </div>

      <div className="hamburger" onClick={() => setIsShown(!isShown)}>
        <Image
          src="/svgs/hamburger.svg"
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
