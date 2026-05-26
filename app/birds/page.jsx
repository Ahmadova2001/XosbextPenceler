"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BirdsPage() {
    const [birds, setBirds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       
        axios.get('http://localhost/PHP/get_animals.php?category_id=3')
            .then(res => {
                console.log("Birds array received:", res.data);
                setBirds(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Birds fetch error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-xl font-semibold">Loading birds...</div>;
    }

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen">
            <h1 className="text-3xl font-bold text-[#720e9e] text-center mb-8">Our Beautiful Birds</h1>
            
       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {birds.map((bird) => (
                    
                    <div key={bird.id} className="border p-4 rounded-xl bg-white shadow-sm">
                        <img 
                            src={`/img/${bird.image_url}`} 
                            alt={bird.name} 
                            className="w-full h-48 object-cover rounded-lg" 
                        />
                        <h2 className="text-xl font-bold mt-2">{bird.name}</h2>
                        <p className="text-sm text-purple-600 font-semibold">{bird.breed} • {bird.age}</p>
                        <p className="text-gray-700 mt-2 text-sm">{bird.description}</p>
                        
                        
                        <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition-colors">
                            Contact via WhatsApp
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}