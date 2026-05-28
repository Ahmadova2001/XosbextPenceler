"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost/PHP/get_services.php')
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setServices(res.data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Services SQL data fetch error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="bg-purple-100 min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold text-[#720e9e] animate-pulse">Loading Our Services...</p>
            </div>
        );
    }

    const defaultServices = [
        { id: 1, title: 'Pet Adoption', description: 'We help homeless pets find safe, loving families through a trusted process.', icon: '🐾' },
        { id: 2, title: 'Veterinary Support', description: 'Access professional healthcare tips and trusted vet contacts for your furry friends.', icon: '🩺' },
        { id: 3, title: 'Pet Care & Training', description: 'Get expert guidance on nutrition, behavior training, and daily pet care routines.', icon: '🍖' }
    ];

    const displayServices = services.length > 0 ? services : defaultServices;

    return (
        <div className="w-full min-h-screen bg-[url('/grooming.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 py-16">
            <div className= 'p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 max-w-3xl w-full text-center'>
                <h2 className='text-4xl font-extrabold text-[#720e9e] mb-2 tracking-wide'>
                    Our Services
                </h2>
                <p className='text-white font-mono mb-8 text-sm uppercase tracking-wider'>
                    How we care for our little friends
                </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-purple-100 pt-6'>
                    {displayServices.map((service) => (
                        <div key={service.id} className='p-5 rounded-2xl bg-purple-50/60 border border-purple-100/50 hover:bg-purple-50 transition duration-300'>
                            <div className='text-3xl mb-3'>{service.icon}</div>
                            <h3 className='text-lg font-bold text-gray-800 mb-2'>
                                {service.title}
                            </h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default ServicesPage;