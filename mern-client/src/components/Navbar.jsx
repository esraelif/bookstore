import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBooksBold } from "react-icons/pi";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.addEventListener("scroll", handleScroll)
        }
    }, [])
    //navItems
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ]
    return (
        <header>
            <nav>
                <div>
                    {/* {logo} */}
                    <Link to="/" className='text-3xl font-bold text-red-600 flex items-center gap-2'> <PiBooksBold className='inline-block' />Books</Link>

                    {/* {nav item for large devices} */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-red-700'> {link} </Link>)
                        }
                    </ul>
                    {/* btn for lg devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-red-700' /></button>
                    </div>
                    {/* menu btn for the mobile devices */}
                    <div className='md:hidden '>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div>
                </div>
                {/* navItem for sm devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-red-700`}>
                    {
                        navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'> {link} </Link>)
                    }
                </div>
            </nav>
        </header >
    );
}

export default Navbar;