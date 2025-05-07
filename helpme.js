const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<cstashes>:<9294>@cluster0.mbuzuzh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function fetchData() {
  try {
    await client.connect();
    const db = client.db("yourDatabaseName");
    const collection = db.collection("yourCollectionName");
    const documents = await collection.find({}).toArray();
    console.log(documents); // Do something with the fetched data
  } finally {
    await client.close();
  }
}

fetchData();