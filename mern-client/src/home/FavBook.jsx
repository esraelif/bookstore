import React from 'react';
import FavBookImg from "../assets/favoritebook.jpg"

const FavBook = () => {
    return (
        <div className='px-4 lg:px-24 my-20'>
            <div className='md:w-1/2'>
                <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
            </div>
            <div className='md:w-1/2 space-y-6'>
                <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-red-600'>Book Here!</span></h2>
                <p className='mb-10 text-lg md:w-5/6'>Explore our extensive collection to find your favorite book here. Whether you love mystery, romance, sci-fi, or non-fiction, we have something for every reader. Start your literary journey today!</p>
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Book Listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>550+</h3>
                        <p className='text-base'>Register Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1200+</h3>
                        <p className='text-base'>PDF Downloads</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FavBook;
