import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Explore the brands and clients we've worked with at Tenda 360 Limited. Our portfolio showcases successful marketing campaigns and business development projects.",
};

export default function Portfolio() {
    return (
        <>
            <Navigation />
            <main>
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Our <span className="hero-highlight">Portfolio</span>
                            </h1>
                            <p className="hero-subtitle">
                                Brands we've helped achieve marketing excellence and retail dominance
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="content-center">
                            <h2 className="section-title">Brands We've Worked With</h2>
                            <p className="section-subtitle">
                                We've had the privilege of partnering with leading brands across various industries, helping them connect with their customers and achieve their business objectives.
                            </p>
                        </div>

                        <div className="portfolio-grid">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                <div key={item} className="portfolio-item">
                                    <div className="portfolio-placeholder">
                                        <svg className="portfolio-placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="portfolio-placeholder-text">Brand Logo</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="portfolio-banner">
                            <h3 className="portfolio-banner-title">Success Stories Coming Soon</h3>
                            <p className="portfolio-banner-text">
                                We're currently compiling detailed case studies showcasing our successful campaigns and the measurable results we've delivered for our clients.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section section-alt">
                    <div className="container">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-subtitle">Trusted by businesses to deliver real results</p>
                        <div className="testimonials-grid">
                            <div className="testimonial-card">
                                <div className="testimonial-quote">"</div>
                                <p className="testimonial-text">
                                    Testimonial content will be added here showcasing client satisfaction and results achieved.
                                </p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar testimonial-avatar-blue">
                                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="testimonial-name">Client Name</p>
                                        <p className="testimonial-company">Company</p>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <div className="testimonial-quote">"</div>
                                <p className="testimonial-text">
                                    Testimonial content will be added here showcasing client satisfaction and results achieved.
                                </p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar testimonial-avatar-orange">
                                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="testimonial-name">Client Name</p>
                                        <p className="testimonial-company">Company</p>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <div className="testimonial-quote">"</div>
                                <p className="testimonial-text">
                                    Testimonial content will be added here showcasing client satisfaction and results achieved.
                                </p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar testimonial-avatar-green">
                                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="testimonial-name">Client Name</p>
                                        <p className="testimonial-company">Company</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2 className="cta-title">Ready to Join Our Success Stories?</h2>
                            <p className="cta-subtitle">
                                Let's create your brand's success story together.
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
