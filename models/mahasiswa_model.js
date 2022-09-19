const mongoose = require("mongoose");

const Mahasiswa = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  nim: {
    type: String,
    required: true,
  },
  tempat_lahir: {
    type: String,
    required: true,
  },
  tanggal_lahir: {
    type: String,
    required: true,
  },
  no_telpon: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("mahasiswa", Mahasiswa);
