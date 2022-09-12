const express = require("express");
const cors = require('cors')
const morgan = require('morgan')

require("dotenv").config();

require("./confiig/database");

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//import routes
const mahasiswaRoute = require('./routes/mahasiswa_route')

app.use('/api', mahasiswaRoute)

app.listen(PORT, () => {
  console.log(`App runnig on port ${PORT}`);
});
