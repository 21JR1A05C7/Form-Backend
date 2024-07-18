// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log('MongoDB database connection established successfully');
// })
// .catch(err => {
//     console.error('MongoDB connection error:', err.message);
// });

// const formRouter = require('./routes/form');
// app.use('/form', formRouter);

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB database connection established successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const formRouter = require('./routes/form');
app.use('/form', formRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
