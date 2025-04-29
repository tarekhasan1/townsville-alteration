'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    {
        name: "About Us",
        href: "/about-us",
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header
            className="bg-yellow-300 py-4 px-6 shadow-md fixed w-screen z-50"
            role="banner"
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Section: Menu Icon for Mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Logo with Accessibility and SEO Best Practices */}
                <Link
                    href="/"
                    className="text-base font-semibold text-gray-900"
                    aria-label="Go to homepage"
                >
                    <Image
                        src="/logo.png"
                        alt="Townsville Alterations and Formal Wear Logo"
                        width={150}
                        height={60}
                        priority
                    />
                </Link>

                {/* Desktop Menu Links */}
                <nav
                    className="hidden lg:flex space-x-6"
                    aria-label="Main navigation"
                >
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "text-gray-700 hover:text-gray-900 transition-all",
                                pathname === item.href &&
                                    "border-b-2 border-gray-900"
                            )}
                            aria-current={pathname === item.href ? "page" : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Section: Social Media and Contact Icons */}
                <div className="flex items-center space-x-4">
                    <a
                        target="_blank"
                        href="https://www.instagram.com/tsvalterationformal?igsh=bXJkaXp3eXN4Yml2"
                        aria-label="Instagram"
                    >
                        <Instagram
                            className="hidden lg:block text-gray-700 cursor-pointer"
                            size={20}
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.facebook.com/DressmakingAlterationsTownsville"
                        aria-label="Facebook"
                    >
                        <Facebook
                            className="hidden lg:block text-gray-700 cursor-pointer"
                            size={20}
                        />
                    </a>
                    <a
                        href="mailto:sales@tsvalterationsandformalwear.com"
                        aria-label="Email us"
                    >
                        <Mail
                            className="text-gray-700 cursor-pointer"
                            size={20}
                        />
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav
                    className="lg:hidden flex flex-col space-y-4 mt-4 bg-white p-4 shadow-md"
                    aria-label="Mobile menu"
                >
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                "block text-gray-700 py-2 px-4 rounded-md hover:bg-yellow-100",
                                pathname === item.href && "bg-yellow-200"
                            )}
                            aria-current={pathname === item.href ? "page" : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
