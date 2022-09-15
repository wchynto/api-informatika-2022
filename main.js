const express = require("express");
const cors = require('cors')
const morgan = require('morgan')

require("dotenv").config();

require("./config/database");

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const mahasiswaRoute = require('./routes/mahasiswa_route')

app.use('/api', mahasiswaRoute)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
