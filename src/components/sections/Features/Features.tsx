import React from "react";
import { Fade } from "react-awesome-reveal";

function Features() {
  return (
    <Fade direction="up" className="fade" triggerOnce fraction={0.3}>
      <section className="features">
        <div className="feature-badge">
          Why Startups Fail More Often Than They Succeed
        </div>
        <div className="feature-img-and-txt">
          <article>
            <h2 className="section-title">
              It&apos;s Not The{" "}
              <span className="highlight">Lack of Money.</span>
            </h2>
            <p className="section-description">
              Most startups don’t fail because the idea is weak or the funding
              isn’t there—they fail because the right team isn’t in place. Lone
              founders often face blind spots, skill gaps, and burnout trying to
              build everything themselves. Without co-founders who share the
              vision and complement their strengths, even the best ideas can
              stall before they reach their true potential.
            </p>
          </article>
        </div>
      </section>
    </Fade>
  );
}

export default Features;
