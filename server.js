const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const cart = require("./routes/cart");
const port = 8888;

app.use('/cart-items', cart);

app.listen(port, () => console.log(`App is up and running on port ${port}`));