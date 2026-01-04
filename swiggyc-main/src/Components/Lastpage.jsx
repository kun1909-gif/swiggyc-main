import React from 'react';

const Lastpage = () => {
  return (
    <div className="max-w-[1200px] h-auto pb-6 mx-auto bg-[#F0F0F5]">
      {/* App Download Section */}
      <div className='flex my-2 items-center justify-centre gap-8 px-3 pt-3'>
                <h2 className='text-[28px] pl-[20px] font-bold'>For better experience,download the Swiggy app now</h2>
                <img src="public\image\play_store.avif" alt="" 
                className='w-[200px]'/>

<img src="public\image\app_store.avif" alt="" 
                className='w-[200px]'/>
            </div>

      {/* Footer Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 pt-6 px-1">
        {/* Logo */}
        <img src="/image/swiggy-logo.svg" alt="Swiggy Logo" className="w-[200px]" />

        {/* Company Info */}
        <div>
          <h1 className="font-bold text-lg">Company</h1>
          <p className="text-gray-600 leading-6">
            About Us <br />
            Swiggy Corporate <br />
            Careers <br />
            Team <br />
            Swiggy One <br />
            Swiggy Instamart <br />
            Swiggy Dineout <br />
          </p>
        </div>

        {/* Legal Section */}
        <div>
          <h1 className="font-bold text-lg">Legal</h1>
          <p className="text-gray-600 leading-6">
            Terms & Conditions <br />
            Cookie Policy <br />
            Privacy Policy <br />
            Investor Relations <br />
          </p>
        </div>

        {/* Life at Swiggy */}
        <div>
          <h1 className="font-bold text-lg">Life at Swiggy</h1>
          <p className="text-gray-600 leading-6">
            Explore with Swiggy <br />
            Swiggy News <br />
            Snackables <br />
          </p>
        </div>

        {/* Available Locations */}
        <div className='pl-[305%] pt-[-90%]'>
          <h1 className="font-bold text-lg">Available in:</h1>
          <p className="text-gray-600 leading-6">
            Bangalore <br />
            Gurgaon <br />
            Hyderabad <br />
            Delhi <br />
            Mumbai <br />
            Bhopal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lastpage;
