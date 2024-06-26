import React, { useState } from 'react';
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
    const bookCategories = [
        "Fiction", "Non-Fiction", "Mistery", "Programming", "Science Fiction", "Fantasy", "Horror", "Bibliography", "Autobiography", "History", "Self-help", "Memoir", "Business", "Children Books", "Travel", "Religion", "Art and Design"
    ]
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])
    const handleChangeSelectedValue = (event) => {
        setSelectedBookCategory(event.target.value)
    }
    // handle book submit
    const handleBookSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const bookTitle = form.bookTitle.value
        const authorName = form.authorName.value
        const imageURL = form.imageURL.value
        const category = form.categoryName.value
        const bookDescription = form.bookDescription.value
        const bookPDFURL = form.bookPDFURL.value
        const bookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL,

        }
        // console.log(bookObj)
        // send data to db
        fetch("http://localhost:3000/upload-book", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(bookObj)

        })
            .then(res => res.json()).then(data => {
                alert("Book uploaded successfully!")
                form.reset()
            })

    }
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
            <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleBookSubmit}>
                {/* first row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
                    </div>
                    {/* author name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="bauthorName" name='authorName' type="text" placeholder="Author Name" required />
                    </div>
                </div>
                {/* second row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required />
                    </div>
                    {/* category name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                            {
                                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                            }

                        </Select>
                    </div>
                </div>

                {/* bookDescription */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" name='BookDescription' placeholder="Write your book description..." required rows={5} className='w-full' />

                </div>
                {/* book pdf link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="book pdf url" required shadow />
                </div>
                <Button type="submit" className='mt-5'>Upload Book</Button>


            </form >

        </div>
    );
}

export default UploadBook;
