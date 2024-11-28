import React from "react";
import Vision from "./Vision";
import Approach from "./approach";
import fabricImage1 from "../../assets/img/fashion3.jpeg";
import fabricImage2 from "../../assets/img/fashion2.jpeg";

{/*Create an array with alternating images*/}
const fabricImages = Array(18).fill(fabricImage1).map((img, index) => (index % 2 === 0 ? fabricImage1 : fabricImage2));

const Fabrics = () => {
    return (
        <div className="container pt-24">
            {/* Title Section */}
            <div>
                <h1 className="font-bold text-4xl text-center">
                    Featured <span className="text-secondary">Fabrics</span>
                </h1>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-3 gap-6 mt-10">
                {fabricImages.map((img, index) => (
                    <div key={index} className="w-full h-48">
                        <img
                            src={img}
                            alt={`Fabric ${index + 1}`}
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Optional Additional Sections */}
            <Vision />
            <Approach />
        </div>
    );
};

export default Fabrics;
