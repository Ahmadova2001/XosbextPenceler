"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const PetsDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-1 hover:text-orange-400 transition">
                Pets <FaChevronDown/>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-48 bg-white text-gray-800 shadow-xl rounded-md py-2 mt-1 z-50">
                    <Link href="/dogs" className="block px-4 py-2 hover:bg-purple-100 transition-colors">Dogs</Link>
                    <Link href="/cats" className="block px-4 py-2 hover:bg-purple-100 transition-colors">Cats</Link>
                    <Link href="/birds" className="block px-4 py-2 hover:bg-purple-100 transition-colors">Birds</Link>
                    <Link href="/aquaticanimals" className="block px-4 py-2 hover:bg-purple-100 transition-colors">Aquatic animals</Link>
                </div>
            )}
        </li>
    );
};

export default PetsDropdown;