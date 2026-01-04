import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const Category = () => {
    const [slide, setSlide] = useState(0);
    const [categories, setCategories] = useState([]);

    // Fetch Categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/categories');
                console.log("Fetched Categories:", response.data);
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    // Number of visible categories per slide
    const visibleItems = 5; 

    // Go to next slide
    const nextSlide = () => {
        if (slide + visibleItems < categories.length) {
            setSlide(slide + 1);
        }
    };

    // Go to previous slide
    const prevSlide = () => {
        if (slide > 0) {
            setSlide(slide - 1);
        }
    };

    return (
        <div className='max-w-[1200px] mx-auto'>
            {/* Header */}
            <div className='flex my-3 items-center justify-between px-6 pt-3'>
                <div className='text-[20px] font-bold'>What's on Your Mind?</div>

                {/* Arrow buttons */}
                <div className='flex ml-auto'>
                    <div 
                        onClick={prevSlide} 
                        className={`flex justify-center items-center w-[30px] h-[30px] bg-gray-500 rounded-full mx-2 cursor-pointer ${slide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <FaArrowLeft />
                    </div>
                    <div 
                        onClick={nextSlide} 
                        className={`flex justify-center items-center w-[30px] h-[30px] bg-gray-500 rounded-full mx-2 cursor-pointer ${(slide + visibleItems >= categories.length) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            {/* Display Categories in a Sliding Row */}
            <div className="overflow-hidden">
                <div className="flex gap-4 transition-transform duration-500" style={{ transform: `translateX(-${slide * 160}px)` }}>
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="w-[155px]  shrink-0 text-center transform transition-transform duration-100 hover:scale-110"
                        >
                            <img  
                                src={`http://localhost:5000/images/${category.image}`}  
                                alt={category.name} 
                                className="object-cover rounded-full w-[160px] h-[200px] pl-2 mx-auto" 
                            />
                            <p className="mt-2 font-medium">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
