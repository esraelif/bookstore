import React from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            <div className='flex flex-col w-full md:flex-row justify-between items-center gap-12 py-40'>
                {/* left size */}
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-red-700'>for the Best Prices</span></h2>
                    <p className='md:w-4/5'>"Discover the joy of expanding your personal library – buy your favorite books or sell your own on our platform!
                        On our website, you can easily sell your own books or find new ones to buy, making it simple to connect with other book lovers."</p>
                    <div>
                        <input type="text" name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none' />
                        <button className='bg-red-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>
                {/* right side */}
                <div>
                    <BannerCard />
                </div>
            </div>
        </div>
    );
}

export default Banner;
