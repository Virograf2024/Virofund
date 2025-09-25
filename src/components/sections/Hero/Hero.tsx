"use client";
import React from "react";
import { RoughNotation } from "react-rough-notation";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "@/components/button/Button";

function Hero() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Fade direction="up" className="fade" triggerOnce>
        <div className="hero-article">
          <div className="badge hero-badge" role="banner" aria-label="Special offer">
            Limited-time Founding Member access
          </div>
          <h1 id="hero-title" className="hero-title">
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
                color="#22c55e"
                strokeWidth={3}
              >
                African
              </RoughNotation>{" "}
            </span>
            Startups Starts With You.
          </h1>
          <div className="hero-subtitle">
            <p className="hero-text">
              Virofund connects ambitious entrepreneurs with the right
              co-founders to build tomorrow&apos;s billion dollar companies.
            </p>
          </div>
          <a href="#waitlist" className="link" aria-label="Navigate to waitlist signup form">
            <Button
              text="Join the first 500 founders"
              hasImage={true}
              imageSrc="/Frame 1171275225.png"
            />
          </a>
        </div>
        <div className="hero-img" role="img" aria-label="African entrepreneurs collaboration">
          <Image
            src="/pngs/hero-img-two.png"
            alt="African entrepreneurs working together on startup ideas, representing collaboration and co-founder matching"
            width={700}
            height={700}
            className="img"
            priority
          />
        </div>
      </Fade>
    </section>
  );
}
export default Hero;
