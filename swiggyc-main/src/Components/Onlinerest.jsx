import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FcRating } from "react-icons/fc";

const TopRest = () => {
    const [datarest, setdatarest] = useState([]);  

    useEffect(() => {
        const fetchTopRestaurant = async () => {
            try {
                const response = await axios.get('http://localhost:5000/top-restaurant-chains');
                console.log("Fetched data:", response.data);  
                setdatarest(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTopRestaurant();
    }, []);

    const filterOptions = [
        "Fast Delivery",
        "New on Swiggy",
        "Ratings 4.0+",
        "Pure Veg",
        "Offers",
        "Rs. 300 - Rs. 600",
        "Less than Rs. 300"
    ];

    return (
        <div className='max-w-[1200px] pb-6 mx-auto'>
            {/* Header */}
            <div className='flex my-3 items-center justify-between px-6 pt-3'>
                <div className='text-[20px] font-bold'>
                    Restaurants with online food delivery in Bhopal
                </div>
            </div>
            <div className="flex gap-3 my-4 px-6 flex-wrap">
    {/* Filter and Sort Buttons */}
    {["Filter", "Sort By ▾", ...filterOptions].map((option, index) => (
        <button 
            key={index} 
            className="px-4 py-1 border-2 border-gray-700 rounded-full shadow-sm font-semibold"
        >
            {option}
        </button>
    ))}
</div>

            {/* Restaurant List in Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {datarest.map((restaurant, index) => (
                    <div key={index} className='bg-white shadow-md p-3 rounded-lg transform transition-transform duration-100 hover:scale-110'>
                        <div className='h-[200px] rounded-[15px] overflow-hidden relative'>
                            <img
                                className='object-cover w-full h-full'
                                src={`http://localhost:5000/images/${restaurant.image}`} 
                                alt={restaurant.name}
                            />
                            <div className='absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter bg-gradient-to-t from-black via-transparent'>
                                <h1>{restaurant.offer}</h1>
                            </div>
                        </div>

                        {/* Restaurant Details */}
                        <div className='mt-3 text-center'>
                            <p className='font-bold text-lg'>{restaurant.title}</p>
                            
                            {/* Rating and Time */}
                            <div className='flex items-center justify-center gap-2 text-gray-600 text-sm mt-1'>
                                <FcRating className='text-xl' />
                                <span>{restaurant.rating} ⭐ | {restaurant.minTime}-{restaurant.maxTime} min</span>
                            </div>

                            <p className='text-md font-semibold mt-1'>{restaurant.name}</p>
                            <p className='text-sm text-gray-500'>{restaurant.place}</p>
                        </div>                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRest;
