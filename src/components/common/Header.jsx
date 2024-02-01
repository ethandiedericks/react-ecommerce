import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMyAccountOpen, setIsMyAccountOpen] = useState(false);

    const openMyAccount = () => {
        setIsMyAccountOpen(true);
    };

    const closeMyAccount = () => {
        setIsMyAccountOpen(false);
    };

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center p-0 m-0">
            <img src="src/assets/images/cartify.png" className="h-8" alt="Flowbite Logo" />
          </a>
          <div className="hidden w-full md:block md:w-auto flex items-center justify-end space-x-4" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0b79bf] md:p-0 dark:text-white md:dark:hover:text-[#0b79bf]dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0b79bf] md:p-0 dark:text-white md:dark:hover:text-[#0b79bf]dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Register
                </a>
              </li>
              <li className="relative group flex items-center" onMouseEnter={openMyAccount} onMouseLeave={closeMyAccount}>
                <button
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0b79bf] md:p-0 dark:text-white md:dark:hover:text-[#0b79bf] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  My Account
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                id="myAccount"
                className={`absolute ${
                  isMyAccountOpen ? 'block' : 'hidden'
                } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 -mt-2 z-10`}
                onClick={openMyAccount}
                onMouseEnter={openMyAccount}
                onMouseLeave={closeMyAccount}
                style={{ top: 'calc(100% + 5px)' }}
              >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Account</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Returns</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Personal Details</a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Heart icon */}
              <li>
                <FontAwesomeIcon icon={faHeart} className="w-5 h-5 text-gray-900 hover:text-blue-700 cursor-pointer" />
              </li>
              {/* Cart icon with number */}
              <li>
                  <FontAwesomeIcon icon={faShoppingCart} className=" w-5 h-5 text-gray-900 hover:text-blue-700 cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-[#0b79bf] text-white">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center ">
                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm w-full">
                    <li>
                        <button 
                        id="dropdownDefaultButton" 
                        data-dropdown-toggle="dropdown" 
                        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-[#0b79bf] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" 
                        type="button"
                        >
                            Shop by Department 
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>

                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">departments</a>
                            </li>
                                
                            </ul>
                        </div>

                    </li>
                    <li className='flex-grow'>
                        <form>   
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative"> 
                                <div className="relative w-full">
                                    <input 
                                    type="search" 
                                    id="search-dropdown" 
                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-lg-gray-50 border-s-2 border border-gray-300   dark:placeholder-gray-400 dark:text-white" placeholder="Search Mockups, Logos, Design Templates..." 
                                    required
                                    />
                                    <button 
                                    type="submit" 
                                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-700 rounded-e-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:gray-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                    >
                                        <svg 
                                        className="w-4 h-4" 
                                        aria-hidden="true" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 20 20"
                                        >
                                            <path 
                                            stroke="currentColor" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>
  );
};

export default Header;
