const express = require('express');
const app = express();
const songRouter = require('./routes/songrouter.js')
const PORT = 5000
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

app.use(cors())

app.use(express.static('build'));
app.use(express.static('./public/uploadDestination'))

app.use('/song', songRouter);



app.use(fileUpload());

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})