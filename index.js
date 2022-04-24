const express = require('express');

const cors = require('cors');
const port = precess.env.PORT || 4000;

const app = express();



//  middleware 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ema Jhon is running.')
});











app.listen(port, () => {
    console.log('Jhon is running on port,', port);
});