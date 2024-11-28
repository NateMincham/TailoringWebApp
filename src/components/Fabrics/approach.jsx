import React from 'react';
import img from "../../assets/img/fashion3.jpeg";

const Approach = () => {
    return (
        <div className='flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14'>
            {/* Content Section */}
            <div className='w-full md:w-2/4'>
                <h1 className='text-4xl font-bold'>Our Approach</h1>
                <h2 className='font-semibold text-lg lg:text-2xl'>
                At Diaz Tailoring, we craft perfectly fitting garments with precision and attention to detail.
                </h2>
            </div>

            {/* Image Section */}
            <div className='w-full md:w-2/5'>
                <img src={img} alt='Fashion Approach' className='rounded-lg' />
            </div>
        </div>
    );
};

export default Approach;
