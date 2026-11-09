
"use client";

import { useState } from "react";
import Link from "next/link";

const navigationLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "منتجاتنا", href: "/products" },
    { label: "من نحن", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container navbar-container">

                <Link
                    href="/"
                    className="navbar-brand"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className="brand-name">حلويات المازرلي</span>
                    <span className="brand-subtitle">MAZARLY SWEETS</span>
                </Link>

                <nav
                    className={`navbar-links ${isMenuOpen ? "active" : ""}`}
                    aria-label="القائمة الرئيسية"
                >
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="navbar-actions">
                    <Link
                        href="/cart"
                        className="navbar-cart"
                        aria-label="سلة التسوق"
                    >
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6" />
                            <circle cx="10" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                        </svg>
                        <span>السلة</span>
                    </Link>

                    <button
                        type="button"
                        className="navbar-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

            </div>
        </header>
    );
}
