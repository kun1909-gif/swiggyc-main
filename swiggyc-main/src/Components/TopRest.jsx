import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { FcRating } from "react-icons/fc";

const TopRest = () => {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0); 

    useEffect(() => {
        const fetchTopRestaurant = async () => {
            try {
                const response = await axios.get('http://localhost:5000/top-restaurant-chains');
                console.log("Fetched data:", response.data); 
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTopRestaurant();
    }, []);

    const nextSlide = () => {
        if (data.length - 2 <= slide) return; 
        setSlide(slide + 2);
    };

    const prevSlide = () => {
        if (slide === 0) return;
        setSlide(slide - 2);
    };

    return (
        <div className='max-w-[1200px] pb-5 mx-auto'>
            {/* Header */}
            <div className=' group flex my-3 items-center justify-between px-6 pt-3'>
                <div className=' text-[20px] font-bold'>Top restaurant chains in Bhopal</div>

                <div className='flex ml-auto'>
                    <div onClick={prevSlide} className='flex justify-center items-center w-[30px] h-[30px] bg-gray-500 rounded-full mx-2 cursor-pointer'>
                        <FaArrowLeft />
                    </div>
                    <div onClick={nextSlide} className='flex justify-center items-center w-[30px] h-[30px] bg-gray-500 rounded-full mx-2 cursor-pointer'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            {/* Restaurant List with Horizontal Scrolling */}
            <div className="flex overflow-hidden">
                <div className="flex gap-5 transition-transform duration-500" style={{ transform: `translateX(-${slide * 275}px)` }}>
                    {data.map((restaurant, index) => (
                        <div key={index} className='w-[280px] relative shrink-0 bg-white shadow-md p-3 rounded-lg transform transition-transform duration-100 hover:scale-110'>
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
        </div>
    );
};

export default TopRest;
