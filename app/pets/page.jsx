"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { DotGothic16 } from 'next/font/google';

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost/PHP/get_categories.php')
            .then(res => {
                console.log("Gələn kateqoriyalar massivi:", res.data);

                setCategories(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Categories fetch error", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-xl font-semibold">Loading categories...</div>;
    }


    return (
        <div className='bg-blue-100'>
            <div className="p-8 max-w-6xl mx-auto min-h-screen">
                <h1 className="text-3xl font-bold mt-4 text-[#720e9e] text-center ">
                    Choose Your Friend
                </h1>
                <p className='text-center text-xl font-mono text-gray-600 mt-5 '>Choose a category to meet our beautiful friends looking for a home</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {categories.map((cat) => (
                        <Link
                            href={cat.id == 1 ? '/dogs' : cat.id == 2 ? '/cats' : cat.id == 3 ? '/birds' : '/aquaticanimals'}
                            key={cat.id}
                        >
                            <div className='border mt-4 border-gray-200 rounded-2xl p-6 text-center bg-blue-900 shadow-sm hover:shadow-md transition-all cursor-pointer hover:bg-amber-600 transition-all duration-500 mt-20'>
                                <div className='w-full h-64 overflow-hidden rounded-xl mb-4 bg-gray-50'>
                                    {cat.id == 1 && <img src="/img/dog2.jpg" alt="Dogs" className='w-full h-full object-cover' />}
                                    {cat.id == 2 && <img src="/img/cat4.jpg" alt="Cats" className='w-full h-full object-cover' />}
                                    {cat.id == 3 && <img src="/img/bird7.jpg" alt="Birds" className='w-full h-full object-cover' />}
                                    {cat.id == 4 && <img src="/img/fish4.jpg" alt="Aquatic animals" className='w-full h-full object-cover' />}
                                </div>
                                <h2 className="text-xl font-bold text-yellow-300">{cat.title}</h2>
                                <p className="text-sm text-white mt-2">Click to view friends </p>
                            </div>
                        </Link>


                    ))
                    }
                </div>
            </div>
        </div>
    );
}