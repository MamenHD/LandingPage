'use client';

import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Menu toggled:', !isOpen); // Untuk debugging
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar bg-base-100 shadow-sm relative">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl" href="/">Nama</a>
            </div>
            
            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Beranda</a></li>
                    <li>
                        <details className="dropdown dropdown-hover">
                            <summary>Kelas</summary>
                            <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Kontak</a></li>
                </ul>
            </div>
            
            <div className="navbar-end">
                <a className="btn hidden sm:inline-flex" href="/">Gabung</a>
                
                {/* Tombol Hamburger */}
                <button 
                    className="btn btn-circle swap swap-rotate lg:hidden z-20"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <input type="checkbox" checked={isOpen} readOnly />
                    
                    {/* Hamburger icon */}
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                    
                    {/* Close icon */}
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed lg:hidden inset-0 bg-opacity-50 z-10" onClick={() => setIsOpen(false)}>
                    <div 
                        className="absolute top-16 right-0 left-0 bg-base-100 shadow-md z-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="menu p-4 w-full">
                            <li><a className="text-lg" onClick={() => setIsOpen(false)}>Beranda</a></li>
                            <li className="menu-dropdown">
                                <details open>
                                    <summary className="text-lg">Kelas</summary>
                                    <ul>
                                        <li><a onClick={() => setIsOpen(false)}>Item 1</a></li>
                                        <li><a onClick={() => setIsOpen(false)}>Item 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a className="text-lg" onClick={() => setIsOpen(false)}>Kontak</a></li>
                            <li className="mt-2">
                                <a className="btn btn-block" href="/" onClick={() => setIsOpen(false)}>Gabung</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;