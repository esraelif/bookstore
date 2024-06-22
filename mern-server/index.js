const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB configuration
const uri = "mongodb+srv://<username>:<password>@<cluster-url>.mongodb.net/?retryWrites=true&w=majority&appName=EsraElif";
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
        app.get('/all-books', async (req, res) => {
            try {
                const books = bookCollections.find();
                const result = await books.toArray();
                res.json(result); // JSON response
            } catch (error) {
                res.status(500).json({ message: 'Error fetching books', error });
            }
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
