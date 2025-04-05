"use client";

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
        <header className="bg-yellow-300 py-4 px-6 shadow-md fixed w-screen z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Section: Search Icon */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* <Search className="hidden lg:block text-gray-700 cursor-pointer" size={20} /> */}

                {/* Logo */}
                <Link
                    href="/"
                    className="text-base font-semibold text-gray-900"
                >
                    {/* TOWNSVILLE ALTERATION <br /> <span className="text-red-900">& FORMAL WEAR</span> */}
                    <Image
                        src="/logo.png"
                        alt="townsville alteration logo"
                        width={150}
                        height={60}
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "text-gray-700 hover:text-gray-900 transition-all",
                                pathname === item.href &&
                                    "border-b-2 border-gray-900"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Section: User, Cart, Social Icons */}
                <div className="flex items-center space-x-4">
                    <a href="">
                        <Instagram
                            className="hidden lg:block text-gray-700 cursor-pointer"
                            size={20}
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.facebook.com/DressmakingAlterationsTownsville"
                    >
                        <Facebook
                            className="hidden lg:block text-gray-700 cursor-pointer"
                            size={20}
                        />
                    </a>
                    {/* <User className="text-gray-700 cursor-pointer" size={20} /> */}
                    <a href="mailto:sales@townsvillealterationsformalwear.com">
                        <Mail
                            className="text-gray-700 cursor-pointer"
                            size={20}
                        />
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="lg:hidden flex flex-col space-y-4 mt-4 bg-white p-4 shadow-md">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                "block text-gray-700 py-2 px-4 rounded-md hover:bg-yellow-100",
                                pathname === item.href && "bg-yellow-200"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
