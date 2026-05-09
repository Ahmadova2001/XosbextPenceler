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
                <div className="absolute top-full left-0 w-40 bg-white text-gray-800 shadow-xl rounded-md py-2 mt-1">
                    <Link href="/pets/dogs" className="block px-4 py-2 hover:bg-purple-100">Dogs</Link>
                    <Link href="/pets/cats" className="block px-4 py-2 hover:bg-purple-100">Cats</Link>
                    <Link href="/pets/birds" className="block px-4 py-2 hover:bg-purple-100">Birds</Link>
                    <Link href="/pets/aquaticanimals" className="block px-4 py-2 hover:bg-purple-100">Aquatic animals</Link>
                </div>
            )}
        </li>
    );
};

export default PetsDropdown;