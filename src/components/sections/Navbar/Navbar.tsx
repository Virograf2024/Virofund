"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/sidebar/Sidebar";
import Button from "@/components/button/Button";
import { useInView } from "react-intersection-observer";

function Navbar() {
  const [isShown, setIsShown] = useState(false);

  // track when the top sentinel is visible
  const { ref, inView } = useInView({
    threshold: 0, // trigger as soon as it leaves/enters
  });

  return (
    <>
      {/* Sentinel: invisible spacer before navbar */}
      <div ref={ref} />

      <header
        role="banner"
        className={`navbar ${inView ? "" : "navbar--fixed"}`}
      >
        <nav className="header" role="navigation" aria-label="Main navigation">
          <div className="logo">
            <Link
              href="/"
              aria-label="Virofund home page"
              className="logo-link"
            >
              <div className="logo-content">
                <Image
                  src="/svgs/logo.svg"
                  alt="Virofund - Connect with Co-Founders"
                  width={30}
                  height={30}
                  className="logo-img"
                  priority
                />
                <p>Virofund</p>
              </div>
              <p>By Virograf</p>
            </Link>
          </div>

          <ul className="nav-children desktop" role="menubar">
            <li role="none">
              <a href="#features" className="nav-child" role="menuitem">
                Features
              </a>
            </li>
            <li role="none">
              <a href="#how-it-works" className="nav-child" role="menuitem">
                How it works
              </a>
            </li>
            <li role="none">
              <a href="#waitlist" className="nav-child" role="menuitem">
                Join the waitlist
              </a>
            </li>
          </ul>

          <div className="nav-child desktop">
            <Button isDisabled={true} text="View Product" hasImage={false} />
          </div>

          <button
            className="hamburger"
            onClick={() => setIsShown(!isShown)}
            aria-label={isShown ? "Close menu" : "Open menu"}
          >
            <Image
              src="/svgs/hamburger.svg"
              className="img"
              width={24}
              height={24}
              alt=""
              aria-hidden="true"
            />
          </button>

          {isShown && <Sidebar cancel={() => setIsShown(false)} />}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
