import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import img from "../../../assets/img/Fashion1.jpg";

const Hero = () => {
    return (
        <div
            className="h-screen bg-cover bg-center text-white relative"
            style={{ backgroundImage: `url(${img})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="h-full flex flex-col justify-center items-center relative z-10">
                <h1 className="text-5xl lg:text-8xl font-extrabold text-center leading-tight px-4">
                    Signature Stitches by Diaz
                </h1>

                {/* Buttons */}
                <div className="flex gap-8 mt-8">
                    <Link
                        to="/services"  // Link to the Services page
                        className="bg-white text-black py-3 px-8 text-lg rounded-md hover:scale-95 hover:bg-opacity-80 transition duration-150 ease-linear"
                    >
                        Services
                    </Link>
                    <Link
                        to="/gallery"  // Link to the Gallery page
                        className="bg-white text-black py-3 px-8 text-lg rounded-md hover:scale-95 hover:bg-opacity-80 transition duration-150 ease-linear"
                    >
                        Gallery
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
