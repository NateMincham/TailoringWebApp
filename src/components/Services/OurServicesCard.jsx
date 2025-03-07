import React from 'react';

const OurServicesCard = ({ icon, title }) => {
    return (
        <div className='text-center p-8 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer'>
            <div>{icon}</div>
            <h1 className='text-primary text-3xl font-bold'>{title}</h1>
            <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum,
                libero ex tempora repudiandae, voluptates beatae vero earum tempore neque laborum
                accusamus aspernatur excepturi rerum adipisci porro asperiores quod illum!
            </p>
        </div>
    );
};

export default OurServicesCard;
