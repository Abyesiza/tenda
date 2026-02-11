import Link from "next/link";

const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/why-us", label: "Why Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3 className="footer-brand">
                            Tenda 360 <span className="footer-brand-accent">Limited</span>
                        </h3>
                        <p className="footer-description">
                            Bridging the gap between brands and consumers through integrated marketing solutions.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="footer-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <a href="tel:+256761041370" className="footer-link">
                                    +256 761 041370
                                </a>
                            </li>
                            <li>
                                <a href="tel:+256768346630" className="footer-link">
                                    +256 768 346630
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Tenda 360 Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
