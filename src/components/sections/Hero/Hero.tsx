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
      <Fade direction="up" className="fade" triggerOnce>
        <article className="hero-article">
          <p className="badge hero-badge">
            Limited-time Founding Member access
          </p>
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
                color="#22c55e"
                strokeWidth={3}
              >
                African
              </RoughNotation>{" "}
            </span>
            Startups Starts With You.
          </h1>
          <article className="hero-subtitle">
            <p className="hero-text">
              Virofund connects ambitious entreprenuers with the right
              co-founders to build tomorrow’s billion dollar companies.
            </p>
          </article>
          <a href="#waitlist" className="link">
            <Button
              text="Join the first 500 founders"
              hasImage={true}
              imageSrc="/Frame 1171275225.png"
            />
          </a>
        </article>
        <div className="hero-img">
          <Image
            src="/pngs/hero-img-two.png"
            alt="hero"
            width={700}
            height={700}
            className="img"
          />
        </div>
      </Fade>
    </section>
  );
}
export default Hero;
