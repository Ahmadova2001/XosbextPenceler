"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DogsPage() {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
        axios.get('http://localhost/PHP/get_animals.php?category_id=1')
            .then(res => {
                console.log("Dogs array received:", res.data);
                setDogs(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Dogs fetch error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-xl font-semibold text-purple-900">Loading dogs...</div>;
    }

    return (
       <div className='bg-blue-200'>  
         <div className="p-8 max-w-6xl mx-auto min-h-screen">
            <h1 className="text-4xl font-bold text-blue-900 text-center mb-2">Our Lovely Dogs</h1>
            <p className="text-center text-gray-500 font-mono mb-10">Meet our beautiful friends looking for a home</p>
            
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dogs.map((dog) => (
                    <div key={dog.id} className="border border-purple-100 p-5 rounded-2xl bg-blue-900 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                        <div>
                           
                            <div className="w-full h-56 overflow-hidden rounded-xl mb-4 bg-gray-50">
                                <img 
                                    src={`/img/${dog.image_url}`} 
                                    alt={dog.name} 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-yellow-400 px-1">{dog.name}</h2>
                            <p className="text-sm text-white font-semibold px-1 mt-1">{dog.breed} • {dog.age}</p>
                            <p className="text-blue-300 mt-3 text-sm px-1 line-clamp-3">{dog.description}</p>
                        </div>
                        
                      
                        <button className="w-full mt-5 bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-sm flex items-center justify-center gap-2">
                            Contact via WhatsApp
                        </button>
                    </div>
                ))}
            </div>
        </div>
       </div>
    );
}