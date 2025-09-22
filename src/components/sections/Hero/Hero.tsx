"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import { RoughNotation } from "react-rough-notation";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "@/components/button/Button";

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
                animationDuration={2000}
                padding={1}
                iterations={3}
                animationDelay={6}
                color="#fff"
                strokeWidth={3}
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
            <Button
              text="Join the first 500 founders"
              hasImage={true}
              imageSrc="/Frame 1171275225.png"
            />
          </a>
        </Fade>
      </article>
    </section>
  );
}

export default Hero;
