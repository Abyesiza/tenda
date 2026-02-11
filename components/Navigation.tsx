"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/why-us", label: "Why Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
];

export default function Navigation() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="nav-container">
            <div className="container">
                <div className="nav-content">
                    <Link href="/" className="logo-link">
                        <Image
                            src="/logo.png"
                            alt="Tenda 360 Limited"
                            width={48}
                            height={48}
                            className="logo-image"
                            priority
                        />
                        <div className="logo-text">
                            <span className="logo-main">Tenda 360</span>
                            <span className="logo-accent">Limited</span>
                        </div>
                    </Link>

                    <div className="desktop-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link ${pathname === link.href ? "nav-link-active" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="nav-cta-button">
                            Get Started
                        </Link>
                    </div>

                    <button
                        className="mobile-menu-button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="menu-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <div className="container mobile-menu-content">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`mobile-nav-link ${pathname === link.href ? "mobile-nav-link-active" : ""}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="mobile-cta-button"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
