import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import { RoughNotation } from "react-rough-notation";

function Features() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <Fade direction="up" className="fade" triggerOnce fraction={0.3}>
      <section
        className="features-container"
        id="features"
        aria-labelledby="features-heading"
      >
        <section className="features">
          <div>
            <div className="feature-badge-container">
              <div className="feature-badge badge" role="complementary">
                Why Startups Fail More Often Than They Succeed
              </div>
            </div>
            <div className="feature-img-and-txt">
              <div>
                <h2
                  id="features-heading"
                  className="section-title feature-title"
                >
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
                <p className="section-description feature-desc match-desc">
                  Most startups don&apos;t fail because the idea is weak or the
                  funding isn&apos;t there—they fail because the right team
                  isn&apos;t in place. Lone founders often face blind spots,
                  skill gaps, and burnout trying to build everything themselves.
                  Without co-founders who share the vision and complement their
                  strengths, even the best ideas can stall before they reach
                  their true potential.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/pngs/fail-png.png"
              alt="Infographic showing statistics about startup failure rates and the importance of having the right team"
              width={1000}
              height={1000}
              className="img fail-img"
            />
          </div>
        </section>
        <section
          className="testimonials"
          aria-labelledby="testimonials-heading"
        >
          <div className="testimonials-body">
            <div style={{ width: "100%" }}>
              <Image
                src="/pngs/testimonials-png.png"
                alt="Visual representation of successful startup co-founder partnerships and collaboration metrics"
                width={1000}
                height={1000}
                className="img"
              />
            </div>
            <div>
              <div className="badge" role="complementary">
                The Smart Way to Build Stronger Startups
              </div>
              <h2 id="testimonials-heading" className="testimonials-title">
                Find the Right Co-Founders. Build with Vision, Skill &
                Compatibility.
              </h2>
              <p>
                Virofund connects ambitious entrepreneurs with co-founders who
                align on vision, bring diverse skills, and match in
                compatibility. It&apos;s not just about finding a
                partner—it&apos;s about building the right team from day one.
                With stronger foundations, startups can move faster, innovate
                smarter, and grow into sustainable, high-impact businesses.
              </p>
            </div>
          </div>
        </section>
      </section>
    </Fade>
  );
}

export default Features;
