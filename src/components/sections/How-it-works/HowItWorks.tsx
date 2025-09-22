import Step from "@/components/sections/How-it-works/steps/Step";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="section-title center">How It works</h2>
      <p className="section-description center">
        Three simple steps to find your perfect co-founder and build the next
        big thing
      </p>
      <div className="step-container">
        {/* STEP 1 */}
        <Fade className="slide" direction="left" cascade triggerOnce>
          <Step
            alt="Create Profile"
            title="Create Profile"
            description="Tell us about your skills, experience, and startup vision. Our algorithm learns what makes you unique."
            imageSrc="/create-profile.jpg"
            background="#CCFFCC"
            stepNumber="/svgs/one-image.svg"
          />
          {/* STEP 2 */}
          <Step
            title="Get Matched"
            description="We pair you by ambition, skills and founder marker fit."
            imageSrc="/get-matched.png"
            alt="Get Matched"
            background="#E3F2FF"
            stepNumber="/svgs/two-image.svg"
          />
          {/* STEP 3 */}
          <Step
            title="Start Building Together"
            imageSrc="/start-building.jpg"
            alt="Start Building Together"
            description="Kick Off with clarity, shared goals and momentum"
            background="#FFE6E7"
            stepNumber="/svgs/three-image.svg"
          />
        </Fade>
      </div>
    </section>
  );
}

export default HowItWorks;
