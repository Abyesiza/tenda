import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Tenda 360 Limited, our vision, mission, and commitment to bridging the gap between brands and consumers through integrated marketing solutions.",
};

export default function About() {
    return (
        <>
            <Navigation />
            <main>
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                About <span className="hero-highlight">Tenda 360</span>
                            </h1>
                            <p className="hero-subtitle">
                                Bridging the gap between brands and consumers since our inception
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="content-center">
                            <h2 className="section-title">Who We Are</h2>
                            <p className="text-content about-text">
                                Tenda 360 Limited is a dynamic marketing and business development agency that specializes in bridging the gap between brands and their consumers. We believe that true brand loyalty is built through meaningful physical interactions and precise digital execution.
                            </p>
                            <p className="text-content about-text">
                                We provide a holistic approach—from the high-energy sales drive on the street to the targeted lead generation on a customer's screen. Our integrated solutions ensure that every touchpoint with your customers is optimized for maximum impact and lasting relationships.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section section-alt">
                    <div className="container">
                        <div className="about-cards-grid">
                            <div className="about-card about-card-blue">
                                <div className="about-card-header">
                                    <div className="about-card-icon about-card-icon-blue">
                                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h2 className="about-card-title">Our Vision</h2>
                                </div>
                                <p className="about-card-text">
                                    To be the leading catalyst for brand excellence in the region, recognized for turning market potential into tangible retail dominance.
                                </p>
                            </div>

                            <div className="about-card about-card-orange">
                                <div className="about-card-header">
                                    <div className="about-card-icon about-card-icon-orange">
                                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h2 className="about-card-title">Our Mission</h2>
                                </div>
                                <p className="about-card-text">
                                    To empower businesses through integrated marketing solutions, combining traditional field expertise with digital innovation to drive sales and foster lasting customer connections.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h2 className="section-title">Our Approach</h2>
                        <p className="section-subtitle">
                            A proven methodology that delivers consistent results
                        </p>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon feature-icon-blue">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="feature-title">Strategic Planning</h3>
                                <p className="feature-text">
                                    Data-driven insights guide every decision we make for your brand.
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon feature-icon-orange">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="feature-title">Field Execution</h3>
                                <p className="feature-text">
                                    Our teams bring your brand to life through direct customer engagement.
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon feature-icon-green">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="feature-title">Measurable Results</h3>
                                <p className="feature-text">
                                    We track, analyze, and optimize to ensure continuous improvement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2 className="cta-title">Partner With Us</h2>
                            <p className="cta-subtitle">
                                Ready to transform your marketing approach? Let's build something great together.
                            </p>
                            <Link href="/contact" className="btn btn-cta">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
