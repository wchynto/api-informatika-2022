const Mahasiswa = require("../models/mahasiswa_model");
const { Op } = require("sequelize");

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
    const mahasiswa = await Mahasiswa.findAll({
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
    const mahasiswa = await Mahasiswa.findAll({
      where: { nama: req.params.nama },
    });
    res.send(mahasiswa);
  } catch (error) {
    console.log(error);
  }
};

const getMahasiswaByKeyword = async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const mahasiswa = await Mahasiswa.findAll({
      where: {
        [Op.or]: [
          {
            nim: {
              [Op.like]: "%" + keyword + "%",
            },
          },
          {
            nama: {
              [Op.like]: "%" + keyword + "%",
            },
          },
        ],
      },
    });
    res.send(mahasiswa);
  } catch (error) {
    console.log(err);
  }
};

module.exports = {
  getAllMahasiswa,
  getMahasiswaByNim,
  getMahasiswaByName,
  getMahasiswaByKeyword,
};
