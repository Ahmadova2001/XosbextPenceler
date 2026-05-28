"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CatsPage() {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get('http://localhost/PHP/get_animals.php?category_id=2')
            .then(res => {
                console.log("Cats array received:", res.data);
                setCats(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Cats fetch error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-xl font-semibold">Loading cats...</div>;
    }

    return (
        <div className='bg-blue-200'>
            <div className="p-8 max-w-6xl mx-auto min-h-screen">
                <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Sweet Cats</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cats.map((cat) => (

                        <div key={cat.id} className="border p-4 rounded-xl bg-blue-900 shadow-sm">
                            <img
                                src={`/img/${cat.image_url}`}
                                alt={cat.name}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <h2 className="text-xl text-yellow-400 font-bold mt-2">{cat.name}</h2>
                            <p className="text-sm text-white font-semibold mt-1">{cat.breed} • {cat.age}</p>
                            <p className="text-blue-300 mt-3 text-sm">{cat.description}</p>
                            <button className="w-full mt-4 bg-green-700 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition-colors">
                                Contact via WhatsApp
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}