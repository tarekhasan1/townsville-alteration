/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Instagram, Facebook, Mail } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

const NAV_ITEMS = [
    { name: "Home", href: "/" },
    {
        name: "Clothing Alterations & Repairs",
        href: "/alterations-and-repairs",
    },
    { name: "Suit Hire", href: "/suit-hire" },
    { name: "Wedding Suits", href: "/wedding-suits" },
    { name: "Wedding Gowns", href: "/wedding-gowns" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    {
        name: "About Us",
        href: "/about-us",
    },
];

const PHONE_NUMBER = "0421929683";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();

    const handleCallClick = () => {
        window.location.href = `tel:${PHONE_NUMBER}`;
    };

    return (
        <header
            className="bg-yellow-300 py-4 px-4 md:px-6 shadow-md fixed w-full z-50"
            role="banner"
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Section: Menu Icon for Mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 p-1"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Logo with Accessibility and SEO Best Practices */}
                <Link
                    href="/"
                    className="text-base font-semibold text-gray-900 flex-shrink-0"
                    aria-label="Go to homepage"
                >
                    <Image
                        src="/logo.png"
                        alt="Townsville Alterations and Formal Wear Logo"
                        width={150}
                        height={60}
                        priority
                        className="h-12 w-auto md:h-14"
                    />
                </Link>

                {/* Desktop Menu Links */}
                <nav
                    className="hidden lg:flex items-center space-x-4 xl:space-x-6"
                    aria-label="Main navigation"
                >
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "text-gray-700 hover:text-gray-900 transition-all whitespace-nowrap",
                                pathname === item.href &&
                                    "border-b-2 border-gray-900 font-semibold"
                            )}
                            aria-current={pathname === item.href ? "page" : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Section: Call Now Button, Social Media and Contact Icons */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    {/* Call Now Button - Hidden on very small screens, icon only */}
                    <button
                        onClick={handleCallClick}
                        className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                        aria-label="Call now"
                    >
                        <Phone size={18} />
                        <span className="hidden xs:inline md:hidden lg:inline">Call Now</span>
                    </button>

                    {/* Social Media Icons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <a
                            target="_blank"
                            href="https://www.instagram.com/tsvalterationformal?igsh=bXJkaXp3eXN4Yml2"
                            aria-label="Instagram"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/DressmakingAlterationsTownsville"
                            aria-label="Facebook"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="mailto:tranglecong2014@gmail.com"
                            aria-label="Email us"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav
                    className="lg:hidden flex flex-col space-y-2 mt-4 bg-white p-4 shadow-md rounded-b-lg"
                    aria-label="Mobile menu"
                >
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                "block text-gray-700 py-3 px-4 rounded-md hover:bg-yellow-100 transition-colors",
                                pathname === item.href && "bg-yellow-200 font-semibold"
                            )}
                            aria-current={pathname === item.href ? "page" : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                    
                    {/* Social Media Icons in Mobile Menu */}
                    <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200">
                        <a
                            target="_blank"
                            href="https://www.instagram.com/tsvalterationformal?igsh=bXJkaXp3eXN4Yml2"
                            aria-label="Instagram"
                            className="text-gray-700 hover:text-gray-900 transition-colors p-2"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/DressmakingAlterationsTownsville"
                            aria-label="Facebook"
                            className="text-gray-700 hover:text-gray-900 transition-colors p-2"
                        >
                            <Facebook size={24} />
                        </a>
                        <a
                            href="mailto:tranglecong2014@gmail.com"
                            aria-label="Email us"
                            className="text-gray-700 hover:text-gray-900 transition-colors p-2"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                    
                    {/* Mobile Call Now Button */}
                    <button
                        onClick={() => {
                            handleCallClick();
                            setIsOpen(false);
                        }}
                        className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md mt-4"
                        aria-label="Call now"
                    >
                        <Phone size={20} />
                        <span>Call Now: {PHONE_NUMBER}</span>
                    </button>
                </nav>
            )}
        </header>
    );
}