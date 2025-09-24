import React from "react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";
import Form from "@/components/form/Form";

function Waitlist() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <section className="waitlist-section">
      {/* The uploaded image above */}
      {/* Waitlist Card */}
      <div className="waitlist">
        <section className="waitlist-and-image">
          <div className="waitlist-child">
            <div>
              <div className="waitlist-badge badge">
                Only 500 spots + founding cohort
              </div>
              <h2 className="waitlist-title">
                Don’t Just Dream.{" "}
                <span ref={ref}>
                  <RoughNotation
                    type="underline"
                    show={inView}
                    animate
                    animationDuration={2500}
                    iterations={5}
                    strokeWidth={3}
                    color="#22c55e"
                  >
                    Build
                  </RoughNotation>
                </span>
              </h2>
              <p className="waitlist-subtitle">
                Join the waitlist and we’ll notify you as soon as early access
                opens.
              </p>
            </div>
            <Form />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Waitlist;
