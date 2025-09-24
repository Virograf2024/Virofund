"use client";
import React from "react";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import { useRouter } from "next/navigation";
function Testimonials() {
  const router = useRouter();
  return (
    <>
      <article className="matching-article">
        <h2 className="section-title">Beyond Matchmaking</h2>
        <p className="match-desc">
          We don&apos;t just connect you with potential co-founders. We provide
          the tools, resources, and community support you need to build lasting
          partnerships and successful startups.
        </p>
      </article>
      <div className="matchmaking-png"></div>

      <section className="matching">
        <div className="matching-overlay">
          <div className="progress-bar-container">
            <ProgressBar />
          </div>

          <div className="img-cta">
            {/* Founding Member Progress Card */}
            <div className="founding-member-card">
              {/* Headline */}
              <div className="headline">
                <h2 className="section-title founding-member-title">
                  Be Remembered as One of the First 500
                </h2>
                {/* Description */}
                <p className="match-description text-dark">
                  Your name will go down as part of the community that started
                  it all. Join today and claim your spot as a Founding Builder
                  of Virofund.
                </p>
                {/* CTA Button */}
                <button
                  onClick={() => router.push("/#waitlist")}
                  className="cta-button founding-member-button"
                >
                  Claim Your Spot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
