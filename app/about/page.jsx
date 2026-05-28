"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost/PHP/get_about.php')
      .then((res) => {
        setAboutData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("SQL data fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-blue-200 min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-purple-800 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className='relative w-full min-h-screen bg-blue-100 overflow-hidden'>
      <img
        src="/about.jpg"
        alt="dog and cat"
        className='w-full h-full min-h-screen object-cover absolute top-0 left-0 z-0'
      />
      <div className='relative z-10 max-w-6xl mx-auto pt-20 px-6 min-h-screen flex flex-col justify-center items-start'>
        <div className='bg-white/85 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 max-w-xl text-left my-8'>
          <h2 className='text-4xl font-extrabold text-[#720e9e] mb-3 tracking-wide'>
            {aboutData?.title || "About HappyPaws"}
          </h2>
          <p className='text-md text-purple-900 font-mono mb-6 bg-purple-50 py-1.5 px-4 rounded-full inline-block font-semibold'>
            {aboutData?.description || "Every pet deserves a loving home."}
          </p>
          <div className='border-t border-purple-100 pt-4'>
            <h3 className='text-xl font-bold text-gray-800 mb-3 flex items-center gap-2'>
              Our Mission & Story
            </h3>
            <p className='text-gray-600 font-sans text-base leading-relaxed whitespace-pre-line'>
              {aboutData?.content || "HappyPaws was founded to bridge the gap between homeless animals and compassionate families."}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;