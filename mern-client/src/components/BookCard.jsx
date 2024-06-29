import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'
const BookCard = ({ headline, books }) => {


    return (
        <div className='my-16 px-4 lg:px-24'>
            <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
            {/* cards */}
            <div className='mt-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full"
                >

                    {
                        books.map(book => <SwiperSlide key={book._id}>
                            <Link to={`/books/${book._id}`}>
                                <div className='relative'>
                                    <img src={book.imageURL} alt="" className='h-28' />
                                    <div className='bg-res-600 hover:bg-black p-2 rounded absolute top-3 right-3'>
                                        <FaCartShopping className='w-4 h-4 text-white' />
                                    </div>
                                </div>
                                <div>
                                    <h3>{book.bookTitle}</h3>
                                    <p>{book.authorName}</p>
                                </div>
                                <div>
                                    <p>$10.00</p>
                                </div>
                            </Link>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default BookCard;
