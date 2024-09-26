import { MongoClient } from 'mongodb';

//  /api/new-meetup 

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://bvp18061992:DGfa3uKmiU4SCt5m@cluster0.j5ygu.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
       
        console.log(result);

        client.close();

        res.status(201).json({message: 'meetup inserted!'});
    }
}

export default handler;