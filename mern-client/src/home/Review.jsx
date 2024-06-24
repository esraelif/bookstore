import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg"
import proPic2 from "../assets/profile2.jpg"
import proPic3 from "../assets/profile3.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        {/* text */}
                        <div className='mt-7'>
                            <p className='mb-5'>Great selection of books, fast shipping, and excellent customer service. Highly recommend this site for all your reading needs!</p>
                            <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                            <h5 className='text-lg font-medium'>Marry Ping</h5>
                            <p className='text-base'>CEO BEATLE Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        {/* text */}
                        <div className='mt-7'>
                            <p className='mb-5'>Wide variety of books, user-friendly interface, and prompt delivery. A perfect place to find and purchase your next read!</p>
                            <Avatar img={proPic2} alt="avatar of Jese" rounded className='w-10 mb-4' />
                            <h5 className='text-lg font-medium'>Jenny Gain</h5>
                            <p className='text-base'>Writer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </div>
                        {/* text */}
                        <div className='mt-7'>
                            <p className='mb-5'>W
                                Fantastic book choices, competitive prices, and quick shipping. This site makes finding and buying books incredibly easy and enjoyable!</p>
                            <Avatar img={proPic3} alt="avatar of Jese" rounded className='w-10 mb-4' />
                            <h5 className='text-lg font-medium'>Gill Temple</h5>
                            <p className='text-base'>Student</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}

export default Review;
