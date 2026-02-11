"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSubmitStatus("success");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => setSubmitStatus("idle"), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+256 700 000000"
                />
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us about your project..."
                />
            </div>

            {submitStatus === "success" && (
                <div className="form-success">
                    Thank you for your message! We'll get back to you soon.
                </div>
            )}

            {submitStatus === "error" && (
                <div className="form-error">
                    Something went wrong. Please try again or contact us directly.
                </div>
            )}

            <button type="submit" disabled={isSubmitting} className="form-submit">
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
