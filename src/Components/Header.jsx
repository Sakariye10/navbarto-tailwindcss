import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="body bg-gray-100 ">
      <div className="nav fiexd top-0 right-0 bg-white shadow">
        <div className="container m-auto flex justify-between items-center text-gray-700">
          <h1 className="pl-8 py-8 text-xl font-bold">sakTech</h1>
          <div className="ul hidden md:flex justify-center items-center pr-10 text-base font-semibold cursor-pointer gap-10">
            <Link to="/home" className="hover:bg-gray-200 py-4 px-6">
              Home
            </Link>
            <Link to="/about" className="hover:bg-gray-200 py-4 px-6">
              About
            </Link>
            <Link to="/service" className="hover:bg-gray-200 py-4 px-6">
              Service
            </Link>
            <Link to="/contact" className="hover:bg-gray-200 py-4 px-6">
              Contact
            </Link>
          </div>
          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div
              className="absolute top-0 -right-full h-screen w-8/12 bg-white border 
            opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-100"
            >
              <dvi className="mune11 flex flex-col items-center w-full text-base cursor-pointer pt-10">
                <Link to="/" className="hover:bg-gray-200 px-6 py-4 w-full ">
                  home
                </Link>
                <Link
                  to="/about"
                  className="hover:bg-gray-200 px-6 py-4 w-full "
                >
                  About
                </Link>
                <Link
                  to="/service"
                  className="hover:bg-gray-200 px-6 py-4 w-full "
                >
                  Service
                </Link>
                <Link to="/contact" className="hover:bg-gray-200 px-6 py-4 w-full ">
                  Contact
                </Link>
              </dvi>
            </div>
          </button>
        </div>
      </div>
      <section className="mt-20 p"></section>
    </div>
  );
}

export default Header;