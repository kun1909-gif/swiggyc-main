import React from 'react';

const BestRest = () => {
    const foodItems = [
        { name: "South Indian Restaurants" },
        { name: "North Indian Restaurants" },
        { name: "Kashmiri Restaurants" },
        { name: "Bengali Restaurants" },
        { name: "Gujarati Restaurants" },
        { name: "Rajasthani Restaurants" },
        { name: "Chinese Restaurants" },
        { name: "Italian Restaurants" },
        { name: "Korean Restaurants" },
        { name: "Japanese Restaurants" }
    ];

    return (
        <div className='max-w-[1200px] pb-6 mx-auto'>
            {/* Header */}
            <div className='flex my-3 items-center justify-between px-6 pt-3'>
                <h2 className='text-[20px] font-bold'>Best Cuisines Near Me</h2>
            </div>

            {/* Cuisine List */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
                {foodItems.map((food, index) => (
                    <a 
                        key={index} 
                        href="/about" 
                        className="block bg-white text-black py-3 px-1 rounded-lg text-center shadow-md hover:scale-105 transition-transform border-2 border-[#4b4a4a] font-bold"
                    >
                        {food.name} 
                        <br />Near me
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BestRest;
