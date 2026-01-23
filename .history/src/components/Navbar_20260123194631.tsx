
'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Instagram, Facebook, Mail } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

const NAV_ITEMS = [
    { name: "Home", href: "/" },
    {
        name: "Clothing Alterations & Repairs",
        href: "/alterations-and-repairs",
    },
    {
        name: "Formal Wear",
        children: [
            { name: "Suit Hire", href: "/suit-hire" },
            { name: "Wedding Suits", href: "/wedding-suits" },
            { name: "Wedding Gowns", href: "/wedding-gowns" },
        ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
];

const PHONE_NUMBER = "0421929683";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();

    const handleCallClick = () => {
        window.location.href = `tel:${PHONE_NUMBER}`;
    };

    return (
        <header className="bg-yellow-300 py-4 px-4 md:px-6 shadow-md fixed w-full z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Logo */}
                <Link href="/" aria-label="Go to homepage">
                    <Image
                        src="/logo.png"
                        alt="Townsville Alterations and Formal Wear Logo"
                        width={150}
                        height={60}
                        priority
                        className="h-12 w-auto md:h-14"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center space-x-5">
                    {NAV_ITEMS.map((item) =>
                        item.children ? (
                            <div key={item.name} className="relative group">
                                <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 whitespace-nowrap">
                                    {item.name}
                                    <ChevronDown size={16} />
                                </button>

                                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[220px] z-50">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={clsx(
                                                "block px-4 py-2 hover:bg-yellow-100",
                                                pathname === child.href &&
                                                    "bg-yellow-200 font-semibold"
                                            )}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "text-gray-700 hover:text-gray-900 whitespace-nowrap",
                                    pathname === item.href &&
                                        "border-b-2 border-gray-900 font-semibold"
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    )}
                </nav>

                {/* Right Section */}
                <div className="flex items-center space-x-3">

                    <div className="hidden md:flex items-center space-x-3">
                        <a href="https://www.instagram.com/tsvalterationformal" target="_blank">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.facebook.com/DressmakingAlterationsTownsville" target="_blank">
                            <Facebook size={20} />
                        </a>
                        <a href="mailto:tranglecong2014@gmail.com">
                            <Mail size={20} />
                        </a>
                    </div>
                    <button
                        onClick={handleCallClick}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow"
                    >
                        <Phone size={18} />
                        <span className="hidden md:inline">Call Now</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="lg:hidden mt-4 bg-white p-4 space-y-2 shadow-md rounded-b-lg">
                    {NAV_ITEMS.map((item) =>
                        item.children ? (
                            <div key={item.name}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full flex justify-between items-center py-3 px-4 rounded-md hover:bg-yellow-100"
                                >
                                    {item.name}
                                    <ChevronDown
                                        size={18}
                                        className={clsx(
                                            "transition-transform",
                                            isDropdownOpen && "rotate-180"
                                        )}
                                    />
                                </button>

                                {isDropdownOpen && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                onClick={() => setIsOpen(false)}
                                                className={clsx(
                                                    "block py-2 px-4 rounded-md hover:bg-yellow-100",
                                                    pathname === child.href &&
                                                        "bg-yellow-200 font-semibold"
                                                )}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "block py-3 px-4 rounded-md hover:bg-yellow-100",
                                    pathname === item.href &&
                                        "bg-yellow-200 font-semibold"
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    )}

                    {/* Mobile Call Button */}
                    <button
                        onClick={handleCallClick}
                        className="w-full mt-4 flex justify-center items-center gap-2 bg-red-600 text-white py-3 rounded-lg font-semibold"
                    >
                        <Phone size={20} />
                        Call Now: {PHONE_NUMBER}
                    </button>
                </nav>
            )}
        </header>
    );
}
