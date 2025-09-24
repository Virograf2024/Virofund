import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import { RoughNotation } from "react-rough-notation";

function Features() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <Fade direction="up" className="fade" triggerOnce fraction={0.3}>
      <section className="features-container">
        <section className="features">
          <div>
            <div className="feature-badge-container">
              <div className="feature-badge badge">
                Why Startups Fail More Often Than They Succeed
              </div>
            </div>
            <div className="feature-img-and-txt">
              <article>
                <h2 className="section-title feature-title">
                  It&apos;s Not The{" "}
                  <span className="highlight">
                    Lack of{" "}
                    <span className="circle" ref={ref}>
                      <RoughNotation
                        type="underline"
                        show={inView}
                        animate
                        animationDuration={2500}
                        iterations={5}
                      >
                        Money
                      </RoughNotation>
                    </span>
                  </span>
                </h2>
                <p className="section-description feature-desc">
                  Most startups don’t fail because the idea is weak or the
                  funding isn’t there—they fail because the right team isn’t in
                  place. Lone founders often face blind spots, skill gaps, and
                  burnout trying to build everything themselves. Without
                  co-founders who share the vision and complement their
                  strengths, even the best ideas can stall before they reach
                  their true potential.
                </p>
              </article>
            </div>
          </div>
          <div>
            <Image
              src="/pngs/fail-png.png"
              alt="why startups fail"
              width={1000}
              height={1000}
              className="img fail-img"
              // style={{ maxWidth: "500px" }}
            />
          </div>
        </section>
        <section className="testimonials">
          <section className="testimonials-body">
            <div style={{ width: "100%" }}>
              <Image
                src="/pngs/testimonials-png.png"
                alt="testimonials"
                width={1000}
                height={1000}
                className="img"
              />
            </div>
            <article>
              <p className="badge">The Smart Way to Build Stronger Startups</p>
              <h1 className="testimonials-title">
                Find the Right Co-Founders. Build with Vision, Skill &
                Compatibility.
              </h1>
              <p>
                Virofund connects ambitious entrepreneurs with co-founders who
                align on vision, bring diverse skills, and match in
                compatibility. It’s not just about finding a partner—it’s about
                building the right team from day one. With stronger foundations,
                startups can move faster, innovate smarter, and grow into
                sustainable, high-impact businesses.
              </p>
            </article>
          </section>
        </section>
      </section>
    </Fade>
  );
}

export default Features;
