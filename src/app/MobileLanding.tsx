import React from 'react';
import './MobileLanding.css';
import Image from "next/image";

const MobileLanding: React.FC = () => {
  return (
    <div className="mobile-container">
      {/* NAVIGATION/HEADER */}
      <header className="header">
        <div className="logo">
          <Image
            src="/Group 264 (1).png"
            alt="Virofund Logo"
            width={150}
            height={70}
            className="logo-img"
          />
        </div>
        <button className="menu-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="hero-title">
          The Future of <span className="highlight">African</span> Startups Starts With You.
        </h1>
        <p className="hero-subtitle">
          Virofund connects ambitious entreprenuers with the right co-founders to build tomorrow’s billion dollar companies.
        </p>
        <button className="cta-button primary flex items-center gap-1">
          <img src="/Frame 1171275225.png" alt="Icon" className="w-5 h-5" />
          Join the first 500 founders
        </button>

        <div className="hero-image">
          <img src="/Frame 1171275270.png" alt="Hero Image" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="feature-badge">
          Why Startups Fail More Often Than They Succeed
        </div>
        <h2 className="section-title">
          It's Not The <span className="highlight">Lack of Money.</span>
        </h2>
        <p className="section-description">
          Most startups don’t fail because the idea is weak or the funding isn’t there—they fail because the right team isn’t in place. Lone founders often face blind spots, skill gaps, and burnout trying to build everything themselves. Without co-founders who share the vision and complement their strengths, even the best ideas can stall before they reach their true potential.
        </p>

        {/* Feature Images */}
        <div className="feature-image">
          <img src="/Frame 1171275271 (2).jpg" alt="Collaboration" className="w-full rounded-lg shadow-md" />
        </div>

        <div className="feature-image mt-6">
          <img src="/Frame 1171275237.png" alt="Additional Feature" className="w-full rounded-lg shadow-md" />
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works">
        <h2 className="section-title center">How It Works</h2>
        <p className="section-description center">
          Three simple steps to find your perfect co-founder and build the next big thing
        </p>

        {/* STEP 1 */}
        <div className="step">
          <div className="step-header">
            <div className="step-number">1</div>
            <div className="step-icon">
              <img src="/Frame 1171275272 (1).jpg" alt="Create Profile" />
            </div>
          </div>
          <h3 className="step-title">Create Your Profile</h3>
          <p className="step-description">
            Tell us about your skills, experience, and startup vision. Our algorithm learns what makes you unique.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="step">
          <div className="step-header">
            <div className="step-number">2</div>
            <div className="step-icon">
              <img src="/Frame 1171275272.png" alt="Get Matched" />
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
              <img src="/Frame 1171275272 (2).jpg" alt="Start Building" />
            </div>
          </div>
          <h3 className="step-title">Start Building Together</h3>
          <p className="step-description">
           Kick Off with clarity, shared goals and momentum
          </p>
        </div>
      </section>



      {/* TESTIMONIAL/MATCHING SECTION */}
      <section className="matching">
        <h2 className="section-title">Beyond Matchmaking</h2>
        <p className="section-description">
          We don't just connect you with potential co-founders. We provide the tools, resources, and community support you need to build lasting partnerships and successful startups.
        </p>
        <div className="matching-image">
          <img src="/Frame 1171275276 (1).jpg" alt="Business Meeting" />
        </div>
        
  {/* Founding Member Progress Card */}
  <div className="founding-member-card">
    <h3 className="progress-title">Founding Member Progress</h3>

    {/* Progress Bar */}
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: "82.4%" }}></div>
    </div>
    <p className="progress-text">412/500 claimed</p>

    {/* Headline */}
    <h2 className="highlight-text">
      Be Remembered as One of the First 500
    </h2>

    {/* Description */}
    <p className="description">
      Your name will go down as part of the community that started it all. 
      Join today and claim your spot as a Founding Builder of Virofund.
    </p>

    {/* CTA Button */}
    <button className="cta-btn">Claim Your Spot</button>
  </div>
      </section>
      {/* WAITLIST IMAGE + SECTION */}
<section className="waitlist-section">
  {/* The uploaded image above */}
 

  {/* Waitlist Card */}
  <div className="waitlist">
    <div className="waitlist-badge">Only 500 spots + founding cohort</div>
    <h2 className="waitlist-title">Don’t Just Dream. Build</h2>
    <p className="waitlist-subtitle">
      Join the waitlist and we’ll notify you as soon as early access opens.
    </p>

    <form className="waitlist-form">
      <label>Name</label>
      <input type="text" placeholder="Enter your name" />

      <label>Email</label>
      <input type="email" placeholder="Enter your email" />

      <label>Phone Number</label>
      <div className="phone-input">
        <select>
          <option>+234</option>
          <option>+1</option>
          <option>+44</option>
        </select>
        <input type="text" placeholder="707 6789 567" />
      </div>

      <button type="submit" className="waitlist-btn">
        Join the waitlist – 500 spot left
      </button>
    </form>

    <p className="privacy-note">
      We respect your privacy, unsubscribe anytime
    </p>
  </div>
</section>

      
      {/* FOOTER */}
<footer className="footer">
  {/* Logo */}
  <div className="footer-logo">
    <img src="/Group 264 (1).png" alt="Virofund Logo" />
    <span>Virofund</span>
  </div>

  {/* Email */}
  <div className="footer-contact">
    <span className="icon">📧</span>
    <a href="mailto:virofund@gmail.com">virofund@gmail.com</a>
  </div>

  {/* Phone Numbers */}
  <div className="footer-contact">
    <span className="icon">📞</span>
    <span>+345 679 874867, +2346980807896</span>
  </div>

  {/* Navigation Links */}
  <div className="footer-links">
    <a href="#">How It Works</a>
    <a href="#">Vision</a>
    <a href="#">Founders</a>
  </div>

  {/* Policies */}
  <div className="footer-policies">
    <a href="#">Privacy Policy</a>
    <a href="#">Legal Policy</a>
  </div>

  {/* Copyright */}
  <p className="footer-copy">©ViroFund2025</p>
</footer>

    </div>
  );
};

export default MobileLanding;
