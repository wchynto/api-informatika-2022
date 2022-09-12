const Mahasiswa = require("../models/mahasiswa_model");

const getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findAll();
    res.send(mahasiswa);
  } catch (error) {
    console.log(error);
  }
};

const getMahasiswaByNim = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findOne({
      where: {
        nim: req.params.nim,
      },
    });
    res.send(mahasiswa);
  } catch (error) {
    console.log(error);
  }
};

const getMahasiswaByName = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findOne({
      where: { nama: req.params.nama },
    });
    res.send(nama);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllMahasiswa, getMahasiswaByNim, getMahasiswaByName };
