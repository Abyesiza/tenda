import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Comprehensive marketing and business development services including sales, digital marketing, merchandising, and experiential marketing solutions.",
};

export default function Services() {
    return (
        <>
            <Navigation />
            <main>
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Our <span className="hero-highlight">Services</span>
                            </h1>
                            <p className="hero-subtitle">
                                Comprehensive marketing solutions designed to drive growth and build lasting customer relationships
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="services-detail-list">
                            <div className="service-detail-card">
                                <div className="service-detail-accent service-detail-accent-blue"></div>
                                <div className="service-detail-body">
                                    <div className="service-detail-header">
                                        <div className="service-icon service-icon-blue">
                                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="service-detail-title">Business Development</h2>
                                            <p className="service-detail-tagline">Strategic Growth & Sales Execution</p>
                                        </div>
                                    </div>
                                    <div className="service-detail-grid">
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-blue">Sales as a Service</h3>
                                            <p className="service-detail-item-text">
                                                We deploy high-performing field teams to act as your brand ambassadors, closing deals and driving immediate revenue.
                                            </p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-blue">Merchandising</h3>
                                            <p className="service-detail-item-text">
                                                Ensuring your brand is the &quot;hero of the shelf&quot; through strategic placement and retail auditing.
                                            </p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-blue">Strategy Consulting</h3>
                                            <p className="service-detail-item-text">
                                                Data-driven insights to help you navigate market entry, scaling, and competitive positioning.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-detail-card">
                                <div className="service-detail-accent service-detail-accent-orange"></div>
                                <div className="service-detail-body">
                                    <div className="service-detail-header">
                                        <div className="service-icon service-icon-orange">
                                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="service-detail-title">Marketing Services</h2>
                                            <p className="service-detail-tagline">Brand Activation & Events</p>
                                        </div>
                                    </div>
                                    <div className="service-detail-grid">
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-orange">Experiential & Event Marketing</h3>
                                            <p className="service-detail-item-text">
                                                We design immersive activations where customers can touch, taste, and experience your brand.
                                            </p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-orange">Customer Service</h3>
                                            <p className="service-detail-item-text">
                                                Professional representation that ensures every customer touchpoint is positive and professional.
                                            </p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-orange">Influencer Marketing</h3>
                                            <p className="service-detail-item-text">
                                                Partnering with voices that carry weight in your specific market.
                                            </p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-orange">Communication Strategy</h3>
                                            <p className="service-detail-item-text">
                                                Crafting the narrative that resonates across all traditional and modern channels.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-detail-card">
                                <div className="service-detail-accent service-detail-accent-green"></div>
                                <div className="service-detail-body">
                                    <div className="service-detail-header">
                                        <div className="service-icon service-icon-green">
                                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="service-detail-title">Digital Marketing</h2>
                                            <p className="service-detail-tagline">Online Presence & Growth</p>
                                        </div>
                                    </div>
                                    <div className="service-detail-grid">
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-green">Social Media Marketing</h3>
                                            <p className="service-detail-item-text">
                                                Building community and engagement on the platforms where your audience lives.
                                            </p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-green">Content Marketing</h3>
                                            <p className="service-detail-item-text">
                                                Creating valuable, story-driven content that educates and converts.
                                            </p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-green">B2B Lead Generation</h3>
                                            <p className="service-detail-item-text">
                                                Identifying and warming up high-value business prospects to fill your sales pipeline.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-detail-card">
                                <div className="service-detail-accent service-detail-accent-blue"></div>
                                <div className="service-detail-body">
                                    <div className="service-detail-header">
                                        <div className="service-icon service-icon-blue">
                                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="service-detail-title">Merchandising Excellence</h2>
                                            <p className="service-detail-tagline">Retail Dominance & Visibility</p>
                                        </div>
                                    </div>
                                    <div className="service-detail-grid">
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-blue">Stock Management</h3>
                                            <p className="service-detail-item-text">Ensuring zero out-of-stock scenarios.</p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-blue">Shelf Optimization</h3>
                                            <p className="service-detail-item-text">Securing eye-level placement and prime real estate.</p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-blue">POSM Placement</h3>
                                            <p className="service-detail-item-text">Expert installation of Point-of-Sale Materials.</p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-blue">Market Intelligence</h3>
                                            <p className="service-detail-item-text">Real-time reporting on competitor pricing and shelf activity.</p>
                                        </div>
                                        <div className="service-detail-item">
                                            <h3 className="service-detail-item-title service-detail-item-title-blue">Visual Standards</h3>
                                            <p className="service-detail-item-text">Maintaining brand aesthetic integrity in every store.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2 className="cta-title">Ready to Get Started?</h2>
                            <p className="cta-subtitle">
                                Let's discuss which services are right for your business.
                            </p>
                            <Link href="/contact" className="btn btn-cta">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
