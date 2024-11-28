import React from "react";
import img from "../../assets/img/fashion2.jpeg";

const Vision = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-5 mt-16">
            {/* Image Section */}
            <div className="w-full md:w-2/5">
                <img src={img} alt="Fashion Vision" className="rounded-lg" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/4">
                <h1 className="text-4xl font-bold">Our Vision</h1>
                <h2 className="font-semibold text-lg lg:text-2xl">
                At Diaz Tailoring, our vision is to deliver timeless, bespoke garments that combine tradition and innovation, empowering our clients with confidence and style
                </h2>
            </div>
        </div>
    );
};

export default Vision;
