import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Bridging Brands and Consumers Through{" "}
                <span className="hero-highlight">Integrated Marketing</span>
              </h1>
              <p className="hero-subtitle">
                From high-energy sales drives to targeted digital campaigns, we deliver holistic marketing solutions that drive real results.
              </p>
              <div className="hero-cta">
                <Link href="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Who We Are</h2>
            <p className="section-subtitle">
              Tenda 360 Limited is a dynamic marketing and business development agency that specializes in bridging the gap between brands and their consumers.
            </p>
            <div className="content-center">
              <p className="text-content">
                We believe that true brand loyalty is built through meaningful physical interactions and precise digital execution. Our holistic approach combines the high-energy sales drive on the street with targeted lead generation on a customer's screen.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive marketing solutions tailored to your business needs
            </p>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon service-icon-blue">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="service-title">Business Development</h3>
                <ul className="service-list">
                  <li>Sales as a Service</li>
                  <li>Merchandising</li>
                  <li>Strategy Consulting</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon service-icon-orange">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="service-title">Marketing Services</h3>
                <ul className="service-list">
                  <li>Experiential Marketing</li>
                  <li>Customer Service</li>
                  <li>Influencer Marketing</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon service-icon-green">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="service-title">Digital Marketing</h3>
                <ul className="service-list">
                  <li>Social Media Marketing</li>
                  <li>Content Marketing</li>
                  <li>B2B Lead Generation</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon service-icon-blue">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="service-title">Merchandising Excellence</h3>
                <ul className="service-list">
                  <li>Stock Management</li>
                  <li>Shelf Optimization</li>
                  <li>POSM Placement</li>
                </ul>
              </div>
            </div>
            <div className="section-cta">
              <Link href="/services" className="btn btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Why Choose Tenda 360?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon feature-icon-orange">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="feature-title">Boots on the Ground</h3>
                <p className="feature-text">
                  We don't just plan; we execute in the field with high-performing teams.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon feature-icon-blue">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="feature-title">Integrated Approach</h3>
                <p className="feature-text">
                  We align your digital ads with physical sales drives for a seamless customer journey.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon feature-icon-green">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="feature-title">Results-Oriented</h3>
                <p className="feature-text">
                  We measure success by your sales growth, not just impressions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Transform Your Brand?
              </h2>
              <p className="cta-subtitle">
                Let's discuss how we can help you achieve your marketing and business development goals.
              </p>
              <Link href="/contact" className="btn btn-cta">
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
