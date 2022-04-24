const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const cors = require('cors');
const port = process.env.PORT || 4000;

const app = express();



//  middleware 

app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.f3est.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try{

    }

    finally{

        
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Ema Jhon is running.')
});


app.listen(port, () => {
    console.log('Jhon is running on port,', port);
});