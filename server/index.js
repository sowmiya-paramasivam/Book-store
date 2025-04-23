const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();


// middleware
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://book-store:${process.env.API_SECRET_KEY}@cluster0.kkzdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection of database
    const bookcollection = client.db("BookInventory").collection("books");

    // Create a collection for orders (Assuming it exists)
    //  const ordersCollection = client.db("BookInventory").collection("orders");

    // insert a book to the db: post method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookcollection.insertOne(data);
      res.send(result);
    })

    // get all books fromthe database
    app.get("/all-books", async (req, res) => {
      const books = bookcollection.find();
      const result = await books.toArray();
      res.send(result)
    })

    //  update a book database
    app.patch("/books/:id", async (req, res) => {
      const id = req.params.id;
      //  console.log(id);

      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData
        },
      };

      // update
      const result = await bookcollection.updateOne(filter, updateDoc, options);
      res.send(result);
    })

    // delete a book data
    app.delete("/books/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookcollection.deleteOne(filter);
      res.send(result)
    })

    //  find by category
    app.get("/search-books", async (req, res) => {
      const search = req.query.search;

      let query = {};
      if (search) {
        const searchRegex = new RegExp(search, 'i'); 
        query = {
          $or: [
            { bookTitle: searchRegex },
            { category: searchRegex },
            { authorName: searchRegex }
          ]
        };
      }

      try {
        const result = await bookcollection.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error("Search error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });


    //  get single book 
    app.get("/books/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookcollection.findOne(filter);
      res.send(result)
    })

    // Get a single order by ID
    app.get("/orders", async (req, res) => {
      const email = req.query.email;
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
      const result = await bookcollection.find({ email }).toArray();
      res.send(result);
    });

 // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})