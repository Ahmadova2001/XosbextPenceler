"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AquaticAnimalsPage() {
    const [fishList, setFishList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     
        axios.get('http://localhost/PHP/get_animals.php?category_id=4')
            .then(res => {
                console.log("Fish array received:", res.data);
                setFishList(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Fish fetch error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-xl font-semibold">Loading aquatic friends...</div>;
    }

    return (
        <div className='bg-blue-200'>
            <div className="p-8 max-w-6xl mx-auto min-h-screen">
                <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Aquatic Friends</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fishList.map((fish) => (
                     
                        <div key={fish.id} className="border p-4 rounded-xl bg-blue-900 shadow-sm">
                            <img
                                src={`/img/${fish.image_url}`}
                                alt={fish.name}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <h2 className="text-xl font-bold mt-2 text-yellow-400">{fish.name}</h2>
                            <p className="text-sm text-white font-semibold">{fish.breed} • {fish.age}</p>
                            <p className="text-blue-200 mt-2 text-sm">{fish.description}</p>
                            <button className="w-full mt-4 bg-green-00 text-white py-2 rounded-lg bg-green-900 font-bold hover:bg-green-600 transition-colors">
                                Contact via WhatsApp
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}