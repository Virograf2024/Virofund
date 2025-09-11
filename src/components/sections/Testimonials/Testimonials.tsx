"use client";
import React from "react";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import { useRouter } from "next/navigation";
function Testimonials() {
  const router = useRouter();
  return (
    <section className="matching">
      <div className="matching-overlay">
        <article className="matching-article">
          <h2 className="section-title">Beyond Matchmaking</h2>
          <p className="section-description match-desc">
            We don&apos;t just connect you with potential co-founders. We
            provide the tools, resources, and community support you need to
            build lasting partnerships and successful startups.
          </p>
        </article>
        <div className="img-cta">
          {/* Founding Member Progress Card */}
          <div className="founding-member-card">
            <ProgressBar />
            {/* Headline */}
            <div className="headline">
              <h2 className="highlight-text match-desc">
                Be Remembered as One of the First 500
              </h2>
              {/* Description */}
              <p className="description match-desc">
                Your name will go down as part of the community that started it
                all. Join today and claim your spot as a Founding Builder of
                Virofund.
              </p>
              {/* CTA Button */}
              <button
                onClick={() => router.push("/#waitlist")}
                className="cta-button"
              >
                Claim Your Spot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
