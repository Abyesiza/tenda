import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroWithSlider from "@/components/HeroWithSlider";

export const metadata: Metadata = {
    title: "Why Choose Us",
    description: "Discover why businesses choose Tenda 360 Limited for their marketing and business development needs. Boots on the ground, integrated approach, and results-oriented solutions.",
};

export default function WhyUs() {
    return (
        <>
            <Navigation />
            <main>
                <section className="hero-section">
                    <HeroWithSlider
                        images={["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"]}
                        themes={["dark", "dark", "dark", "light"]}
                    >
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Why Choose <span className="hero-highlight">Tenda 360?</span>
                            </h1>
                            <p className="hero-subtitle">
                                We deliver results through a unique combination of field expertise and digital innovation
                            </p>
                        </div>
                    </HeroWithSlider>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="features-grid">
                            <div className="feature-card feature-card-accent-orange">
                                <div className="feature-icon feature-icon-orange">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="feature-title">Boots on the Ground</h3>
                                <p className="feature-text">
                                    We don't just plan; we execute in the field. Our high-performing teams are your brand ambassadors, actively engaging with customers and driving sales where it matters most.
                                </p>
                            </div>

                            <div className="feature-card feature-card-accent-blue">
                                <div className="feature-icon feature-icon-blue">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="feature-title">Integrated Approach</h3>
                                <p className="feature-text">
                                    We align your digital ads with your physical sales drives for a seamless customer journey. Our holistic strategy ensures consistency across all touchpoints.
                                </p>
                            </div>

                            <div className="feature-card feature-card-accent-green">
                                <div className="feature-icon feature-icon-green">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="feature-title">Results-Oriented</h3>
                                <p className="feature-text">
                                    We measure success by your sales growth, not just impressions. Every campaign is designed with clear KPIs and measurable outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-alt">
                    <div className="container">
                        <h2 className="section-title">Our Commitment to Excellence</h2>
                        <p className="section-subtitle">
                            What sets us apart from the competition
                        </p>
                        <div className="commitment-list">
                            <div className="commitment-item">
                                <div className="commitment-icon commitment-icon-blue">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="commitment-text">
                                    <h3 className="commitment-title">Professional Teams</h3>
                                    <p className="commitment-desc">
                                        Our field teams are thoroughly trained, professional, and passionate about representing your brand with excellence.
                                    </p>
                                </div>
                            </div>

                            <div className="commitment-item">
                                <div className="commitment-icon commitment-icon-orange">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <div className="commitment-text">
                                    <h3 className="commitment-title">Data-Driven Decisions</h3>
                                    <p className="commitment-desc">
                                        We leverage market intelligence and analytics to inform strategy and optimize performance continuously.
                                    </p>
                                </div>
                            </div>

                            <div className="commitment-item">
                                <div className="commitment-icon commitment-icon-green">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="commitment-text">
                                    <h3 className="commitment-title">Timely Execution</h3>
                                    <p className="commitment-desc">
                                        We understand that timing is everything in marketing. Our agile approach ensures rapid deployment and execution.
                                    </p>
                                </div>
                            </div>

                            <div className="commitment-item">
                                <div className="commitment-icon commitment-icon-blue">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </div>
                                <div className="commitment-text">
                                    <h3 className="commitment-title">Transparent Communication</h3>
                                    <p className="commitment-desc">
                                        Regular reporting and open communication ensure you're always informed about campaign performance and progress.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2 className="cta-title">Experience the Tenda 360 Difference</h2>
                            <p className="cta-subtitle">
                                Partner with us to transform your marketing strategy and achieve measurable business growth.
                            </p>
                            <Link href="/contact" className="btn btn-cta">
                                Start Your Journey
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
