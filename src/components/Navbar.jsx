import React, { useState } from "react";
import { RxStitchesLogo } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    return (
        <header className="fixed w-full z-20 bg-tertiary text-black py-4">
            {/* Desktop Navigation Section */}
            <nav className="container flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <RxStitchesLogo size={35} className="text-primary" />
                    <Link to="/" className="font-bold text-2xl">Signature Stitches by Diaz</Link>
                </div>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8 font-medium text-xl">
                    <Link to="/" className="hover:text-secondary transition duration-200 ease-linear">
                        Home
                    </Link>
                    <Link to="/Fabrics" className="hover:text-secondary transition duration-200 ease-linear">
                        Fabrics
                    </Link>
                    <Link to="/Services" className="hover:text-secondary transition duration-200 ease-linear">
                        Services
                    </Link>
                    <Link to="/Gallery" className="hover:text-secondary transition duration-200 ease-linear">
                        Gallery
                    </Link>
                    <Link to="/Contact" className="hover:text-secondary transition duration-200 ease-linear">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} className="cursor-pointer" />
                    ) : (
                        <RiMenuUnfoldFill size={25} onClick={handleChange} className="cursor-pointer" />
                    )}
                </div>
            </nav>

            {/* Responsive Navigation Links */}
            <div
                className={`${
                    menu ? "translate-x-0" : "-translate-x-full"
                } md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
            >
                <Link to="/" className="hover:text-primary transition duration-200 ease-linear">
                    Home
                </Link>
                <Link to="/Fabrics" className="hover:text-primary transition duration-200 ease-linear">
                    Fabrics
                </Link>
                <Link to="/Services" className="hover:text-primary transition duration-200 ease-linear">
                    Services
                </Link>
                <Link to="/Gallery" className="hover:text-primary transition duration-200 ease-linear">
                    Gallery
                </Link>
                <Link to="/Contact" className="hover:text-primary transition duration-200 ease-linear">
                    Contact
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
