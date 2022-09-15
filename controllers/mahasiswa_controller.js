const Mahasiswa = require("../models/mahasiswa_model");

const getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.send(mahasiswa);
  } catch (error) {
    console.log(error);
  }
};

const getMahasiswaByKeyword = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllMahasiswa, getMahasiswaByKeyword };
