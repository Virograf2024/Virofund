"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import { RoughNotation } from "react-rough-notation";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function Hero() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <section className="hero">
      <article className="hero-article">
        <Fade direction="up" className="fade" triggerOnce>
          <h1 className="hero-title">
            The Future of{" "}
            <span className="highlight" ref={ref}>
              <RoughNotation
                type="underline"
                show={inView}
                animate
                animationDuration={2500}
                padding={1}
                iterations={5}
                animationDelay={6}
                color="#fff"
              >
                African
              </RoughNotation>{" "}
            </span>
            Startups Starts With You.
          </h1>
          <p className="hero-subtitle">
            Virofund connects ambitious entreprenuers with the right co-founders
            to build tomorrow’s billion dollar companies.
          </p>
          <a href="#waitlist" className="link">
            <button
              type="button"
              className="link-btn cta-button primary flex items-center gap-1"
            >
              <Image
                src="/Frame 1171275225.png"
                alt="Icon"
                width={40}
                height={20}
              />
              Join the first 500 founders
            </button>
          </a>
        </Fade>
      </article>
    </section>
  );
}

export default Hero;
