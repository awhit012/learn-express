const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const router = require('./router')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learn-express', {useNewUrlParser: true, 
	useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("we're connected!")
});

app.use(bodyParser.json())
app.use('/lessons', router)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))