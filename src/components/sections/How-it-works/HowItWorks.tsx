import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import { RoughNotation } from "react-rough-notation";

function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="section-title center">
        How It{" "}
        <span className="circle" ref={ref}>
          <RoughNotation
            type="circle"
            show={inView}
            animate
            animationDuration={2500}
            iterations={5}
          >
            Works
          </RoughNotation>
        </span>
      </h2>
      <p className="section-description center">
        Three simple steps to find your perfect co-founder and build the next
        big thing
      </p>
      <div className="step-container">
        {/* STEP 1 */}
        <Fade className="slide" direction="left" cascade triggerOnce>
          <div className="step">
            <div className="step-header">
              <div className="step-number">1</div>
              <div className="step-icon">
                <Image
                  width={200}
                  height={200}
                  src="/Frame 1171275272 (1).jpg"
                  alt="Create Profile"
                />
              </div>
            </div>
            <h3 className="step-title">Create Your Profile</h3>
            <p className="step-description">
              Tell us about your skills, experience, and startup vision. Our
              algorithm learns what makes you unique.
            </p>
          </div>
          {/* STEP 2 */}
          <div className="step">
            <div className="step-header">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Image
                  src="/Frame 1171275272.png"
                  alt="Get Matched"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <h3 className="step-title">Get Matched</h3>
            <p className="step-description">
              We pair you by ambition, skills and founder marker fit.
            </p>
          </div>
          {/* STEP 3 */}
          <div className="step">
            <div className="step-header">
              <div className="step-number">3</div>
              <div className="step-icon">
                <Image
                  width={200}
                  height={200}
                  src="/Frame 1171275272 (2).jpg"
                  alt="Start Building"
                />
              </div>
            </div>
            <h3 className="step-title">Start Building Together</h3>
            <p className="step-description">
              Kick Off with clarity, shared goals and momentum
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default HowItWorks;
