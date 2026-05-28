"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VolunteerPage = () => {
    const [volunteerData, setVolunteerData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost/PHP/get_volunteer.php')
            .then((res) => {
                setVolunteerData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Volunteer SQL data fetch error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="bg-purple-100 min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold text-[#720e9e] animate-pulse">Loading Volunteer Page...</p>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-[url('/volunteer.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4">
            <div className='p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 max-w-xl text-left my-8'>
                <h2 className='text-4xl font-extrabold text-[#720e9e] mb-3 tracking-wide'>
                    {volunteerData?.title || "Become a Volunteer"}
                </h2>
                <p className='text-md text-purple-950 font-mono mb-6 bg-purple-100/70 py-2 px-4 rounded-full inline-block font-semibold'>
                    {volunteerData?.description || "Make a difference in a pet's life today."}
                </p>
                <div className='border-t border-purple-100 pt-4 mb-6'>
                    <h3 className='text-xl font-bold text-gray-800 mb-3 flex items-center gap-2'>
                        Why Join Us?
                    </h3>
                    <p className='text-white font-sans text-base leading-relaxed whitespace-pre-line'>
                        {volunteerData?.content || "Our volunteers are the heart of HappyPaws. Whether it is walking dogs, helping with adoption events, or rescuing animals in need, your time and love can give them a second chance at life. No experience needed, just a big heart!"}
                    </p>
                </div>
                <button className='w-full bg-[#720e9e] hover:bg-[#590b7b] text-white font-bold py-3 px-6 rounded-2xl transition duration-300 shadow-md transform hover:-translate-y-0.5'>
                    Apply as a Volunteer
                </button>

            </div>

        </div>
    );
};

export default VolunteerPage;