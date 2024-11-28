import React from 'react';
import { RxStitchesLogo } from "react-icons/rx";
import OurServicesCard from './OurServicesCard';

const OurServices = () => {
    const icon = <RxStitchesLogo className='text-secondary mx-auto' size={48} />;

    return (
        <div className='container pt-24'>
            <div>
                <h1 className='font-bold text-4xl text-center'>
                    Our <span className='text-secondary'>Services</span>
                </h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                <OurServicesCard icon={icon} title="Custom Suit Tailoring" />
                <OurServicesCard icon={icon} title="Alterations and Adjustments" />
                <OurServicesCard icon={icon} title="Restyling Vintage Clothing" />
                <OurServicesCard icon={icon} title="Custom Tailored Shirts" />
                <OurServicesCard icon={icon} title="Made-to-Measure Trousers" />
                <OurServicesCard icon={icon} title="Embroidery and Monogramming" />
            </div>
        </div>
    );
};

export default OurServices;
