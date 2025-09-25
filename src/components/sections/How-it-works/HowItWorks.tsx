import Step from "@/components/sections/How-it-works/steps/Step";
import React from "react";
import { Fade } from "react-awesome-reveal";

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-it-works-title">
      <div className="how-it-works-article">
        <h2 id="how-it-works-title" className="section-title center">How It Works</h2>
      </div>
      <div className="step-container" role="list" aria-label="Steps to get started with Virofund">
        <Fade className="slide" direction="left" cascade triggerOnce>
          <Step
            alt="Create Profile"
            title="Create Profile"
            description="Tell us about your skills, experience, and startup vision. Our algorithm learns what makes you unique."
            imageSrc="/create-profile.jpg"
            background="#CCFFCC"
            stepNumber="/svgs/one-image.svg"
          />
          <Step
            title="Get Matched"
            description="We pair you by ambition, skills and founder market fit."
            imageSrc="/get-matched.png"
            alt="Get Matched"
            background="#E3F2FF"
            stepNumber="/svgs/two-image.svg"
          />
          <Step
            title="Start Building Together"
            imageSrc="/start-building.jpg"
            alt="Start Building Together"
            description="Kick off with clarity, shared goals and momentum"
            background="#FFE6E7"
            stepNumber="/svgs/three-image.svg"
          />
        </Fade>
      </div>
    </section>
  );
}

export default HowItWorks;
