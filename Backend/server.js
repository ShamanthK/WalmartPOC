const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const items = require('./routes/api/items');
const tables = require('./routes/api/tables');

const app = express();

app.use(bodyParser.json());

app.use(cors());

const db = require('./keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use('/api/items', items);

app.use('/api/tables', tables);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port 5000"));




