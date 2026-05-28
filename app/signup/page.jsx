"use client";

import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        axios.post('http://localhost/PHP/signup.php', formData)
            .then((res) => {
                setMessage("Registration successful! 🎉");
                setFormData({ username: '', email: '', password: '' });
                setLoading(false);
            })
            .catch((err) => {
                console.error("Sign up error:", err);
                setMessage("Frontend test: Data captured successfully! (Connect PHP to save to SQL)");
                setLoading(false);
            });
    };

    return (
        <div className="w-full min-h-screen bg-blue-100 flex flex-col justify-center items-center px-4 py-16">
            <div className='bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 max-w-md w-full text-center'>
                <h2 className='text-4xl font-extrabold text-[#720e9e] mb-2 tracking-wide'>
                    Create Account
                </h2>
                <p className='text-gray-500 font-mono mb-6 text-sm uppercase tracking-wider'>
                    Join the HappyPaws family
                </p>
                <form onSubmit={handleSubmit} className='space-y-4 text-left border-t border-purple-100 pt-6'>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-1'>Username</label>
                        <input 
                            type="text" 
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            placeholder="Enter your username"
                            className='w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#720e9e]/50'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-1'>Email Address</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className='w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#720e9e]/50'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-1'>Password</label>
                        <input 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="••••••••"
                            className='w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#720e9e]/50'
                        />
                    </div>
                    {message && (
                        <p className='text-sm font-medium text-center text-purple-800 bg-purple-50 p-2 rounded-xl border border-purple-100'>
                            {message}
                        </p>
                    )}
                    <button 
                        type="submit"
                        disabled={loading}
                        className='w-full bg-[#720e9e] hover:bg-[#590b7b] text-white font-bold py-3 px-6 rounded-2xl transition duration-300 shadow-md transform hover:-translate-y-0.5 mt-2 uppercase tracking-wider text-sm disabled:bg-gray-400'
                    >
                        {loading ? "Registering..." : "Sign Up"}
                    </button>
                </form>

            </div>

        </div>
    );
};

export default SignUpPage;