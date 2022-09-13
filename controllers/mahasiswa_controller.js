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

const getMahasiswaByNimAsc = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      order: [["id", "asc"]],
    });
    res.send(mahasiswa);
  } catch (error) {
    console.log(error);
  }
};

const getMahasiswaByNameAsc = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      order: [["nama", "asc"]],
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
  getMahasiswaByNimAsc,
  getMahasiswaByNameAsc,
  getMahasiswaByKeyword,
};
