const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB configuration
const uri = "mongodb+srv://elifesratunca:1985.Esra2008.Kaan@esraelif.eea5atc.mongodb.net/?retryWrites=true&w=majority&appName=EsraElif";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Define collection
        const bookCollections = client.db('bookstore').collection('books');

        // Insert a book to the db: POST method
        app.post('/upload-book', async (req, res) => {
            try {
                const data = req.body;
                const result = await bookCollections.insertOne(data);
                res.json(result); // JSON response
            } catch (error) {
                res.status(500).json({ message: 'Error inserting book', error });
            }
        });

        // Get all books from the db
        // app.get('/all-books', async (req, res) => {
        //     try {
        //         const books = bookCollections.find();
        //         const result = await books.toArray();
        //         res.json(result); // JSON response
        //     } catch (error) {
        //         res.status(500).json({ message: 'Error fetching books', error });
        //     }
        // });
        app.get('/all-books', (req, res) => {
            const books = [
                {
                    "_id": "666c535b0999b74f4e84361d",
                    "bookTitle": "The Maid",
                    "authorName": "Nite Prose",
                    "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643228739i/55196813.jpg",
                    "category": "Mystery",
                    "bookDescription": "Since Gran died a few months ago, twenty-five-year-old Molly has been navigating life's complexities all by herself. No matter—she throws herself with gusto into her work as a hotel maid. Her unique character, along with her obsessive love of cleaning and proper etiquette, make her an ideal fit for the job. She delights in donning her crisp uniform each morning, stocking her cart with miniature soaps and bottles, and returning guest rooms at the Regency Grand Hotel to a state of perfection.",
                    "bookPDFURL": "https://www.goodreads.com/book/show/55196813-the-maid"
                },
                {
                    "_id": "666c5ae90999b74f4e84361e",
                    "bookTitle": "Everest, Inc.",
                    "authorName": "Will Cockrell",
                    "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686501528i/176444025.jpg",
                    "category": "Travel",
                    "bookDescription": "Featuring original interviews with mountain guides and climbers—including Jimmy Chin and Conrad Anker—this vivid and authoritative adventure history chronicles one of the least likely industries on guided climbing on Mount Everest.",
                    "bookPDFURL": "https://www.goodreads.com/book/show/176444025-everest-inc"
                },
                {
                    "_id": {
                        "$oid": "666c5ba10999b74f4e84361f"
                    },
                    "bookTitle": "House of Sky",
                    "authorName": "Sarah J. Maas",
                    "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg",
                    "category": "Fantasy",
                    "bookDescription": "Bryce Quinlan and Hunt Athalar are trying to get back to normal―they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds.\n\nThe Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebels’ plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.",
                    "bookPDFURL": "https://www.goodreads.com/book/show/40132775-house-of-sky-and-breath"
                },
                {
                    "_id": "666dd58db333ebe20e38cbc9",
                    "bookTitle": "Book Lovers",
                    "authorName": "Emily Henry",
                    "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg",
                    "category": "Fiction",
                    "bookDescription": "Nora Stephens’ life is books—she’s read them all—and she is not that type of heroine. Not the plucky one, not the laidback dream girl, and especially not the sweetheart. In fact, the only people Nora is a heroine for are her clients, for whom she lands enormous deals as a cutthroat literary agent, and her beloved little sister Libby.",
                    "bookPDFURL": "https://www.goodreads.com/book/show/58690308-book-lovers"
                }

            ];
            res.json(books); // JSON verisini döndür
        });

        // Update a book data: PATCH method
        app.patch('/book/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const updateBookData = req.body;
                const filter = { _id: new ObjectId(id) };
                const options = { upsert: true };
                const updateDoc = { $set: { ...updateBookData } };

                const result = await bookCollections.updateOne(filter, updateDoc, options);
                res.json(result); // JSON response
            } catch (error) {
                res.status(500).json({ message: 'Error updating book', error });
            }
        });

        // Delete a book data
        app.delete('/book/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const filter = { _id: new ObjectId(id) };
                const result = await bookCollections.deleteOne(filter);
                res.json(result); // JSON response
            } catch (error) {
                res.status(500).json({ message: 'Error deleting book', error });
            }
        });

        // Find by category
        app.get('/books-by-category', async (req, res) => {
            try {
                let query = {};
                if (req.query?.category) {
                    query = { category: req.query.category };
                }
                const result = await bookCollections.find(query).toArray();
                res.json(result); // JSON response
            } catch (error) {
                res.status(500).json({ message: 'Error fetching books by category', error });
            }
        });

        await client.db('admin').command({ ping: 1 });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } catch (err) {
        console.error(err);
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});












// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB configuration
// const uri = "mongodb+srv://elifesratunca:1985.Esra2008.Kaan@esraelif.eea5atc.mongodb.net/?retryWrites=true&w=majority&appName=EsraElif";
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server
//         await client.connect();

//         // Define collection
//         const bookCollections = client.db('bookstore').collection('books');

//         // Insert a book to the db: POST method
//         app.post('/upload-book', async (req, res) => {
//             try {
//                 const data = req.body;
//                 if (!data) {
//                     return res.status(400).json({ message: 'No data provided' });
//                 }
//                 const result = await bookCollections.insertOne(data);
//                 res.json(result); // JSON response
//             } catch (error) {
//                 console.error('Error inserting book:', error);
//                 res.status(500).json({ message: 'Error inserting book', error });
//             }
//         });

//         // Get all books from the db
//         app.get('/all-books', async (req, res) => {
//             try {
//                 const books = await bookCollections.find().toArray();
//                 res.json(books); // JSON response
//             } catch (error) {
//                 console.error('Error fetching books:', error);
//                 res.status(500).json({ message: 'Error fetching books', error });
//             }
//         });

//         // Update a book data: PATCH method
//         app.patch('/book/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const updateBookData = req.body;
//                 const filter = { _id: new ObjectId(id) };
//                 const options = { upsert: true };
//                 const updateDoc = { $set: { ...updateBookData } };

//                 const result = await bookCollections.updateOne(filter, updateDoc, options);
//                 res.json(result); // JSON response
//             } catch (error) {
//                 console.error('Error updating book:', error);
//                 res.status(500).json({ message: 'Error updating book', error });
//             }
//         });

//         // Delete a book data
//         app.delete('/book/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const filter = { _id: new ObjectId(id) };
//                 const result = await bookCollections.deleteOne(filter);
//                 res.json(result); // JSON response
//             } catch (error) {
//                 console.error('Error deleting book:', error);
//                 res.status(500).json({ message: 'Error deleting book', error });
//             }
//         });

//         // Find by category
//         app.get('/books-by-category', async (req, res) => {
//             try {
//                 let query = {};
//                 if (req.query?.category) {
//                     query = { category: req.query.category };
//                 }
//                 const result = await bookCollections.find(query).toArray();
//                 res.json(result); // JSON response
//             } catch (error) {
//                 console.error('Error fetching books by category:', error);
//                 res.status(500).json({ message: 'Error fetching books by category', error });
//             }
//         });

//         // to get a single book data
//         app.get("/book/:id", async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) }
//             const result = await bookCollections.findOne(filter)
//             res.send(result)
//         })

//         // Ping the database
//         await client.db('admin').command({ ping: 1 });
//         console.log('Pinged your deployment. You successfully connected to MongoDB!');
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//     }
// }

// run().catch(console.dir);

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });
