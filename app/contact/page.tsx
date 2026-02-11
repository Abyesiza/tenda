import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Tenda 360 Limited. Contact us for marketing and business development services. Call us at +256 761 041370 or +256 768 346630.",
};

export default function Contact() {
    return (
        <>
            <Navigation />
            <main>
                <section className="hero-section hero-section-contact">
                    <div className="container hero-theme-light">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Contact <span className="hero-highlight">Us</span>
                            </h1>
                            <p className="hero-subtitle">
                                Let's discuss how we can help transform your brand
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section section-contact">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-info">
                                <h2 className="contact-heading">Get in Touch</h2>
                                <p className="contact-intro">
                                    Ready to take your marketing to the next level? Fill out the form and our team will get back to you within 24 hours.
                                </p>

                                <div className="contact-details">
                                    <div className="contact-detail-item">
                                        <div className="contact-detail-icon contact-detail-icon-blue">
                                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="contact-detail-label">Phone</h3>
                                            <a href="tel:+256761041370" className="contact-link">+256 761 041370</a>
                                            <a href="tel:+256768346630" className="contact-link">+256 768 346630</a>
                                        </div>
                                    </div>

                                    <div className="contact-detail-item">
                                        <div className="contact-detail-icon contact-detail-icon-orange">
                                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="contact-detail-label">Business Hours</h3>
                                            <p className="contact-detail-value">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                            <p className="contact-detail-value">Saturday: 9:00 AM - 1:00 PM</p>
                                        </div>
                                    </div>

                                    <div className="contact-detail-item">
                                        <div className="contact-detail-icon contact-detail-icon-green">
                                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="contact-detail-label">Location</h3>
                                            <p className="contact-detail-value">Uganda</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-why-box">
                                    <h3 className="contact-why-title">Why Choose Tenda 360?</h3>
                                    <ul className="contact-why-list">
                                        <li className="contact-why-item">
                                            <svg className="contact-check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Boots on the ground execution
                                        </li>
                                        <li className="contact-why-item">
                                            <svg className="contact-check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Integrated digital and physical approach
                                        </li>
                                        <li className="contact-why-item">
                                            <svg className="contact-check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Results-oriented campaigns
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="contact-form-card">
                                <h2 className="contact-form-title">Send Us a Message</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
