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
    const search = req.params.keyword;
    const mahasiswa = await Mahasiswa.find({
      $or: [
        { name: { $regex: ".*" + search + ".*", $option: "i" } },
        { nim: { $regex: ".*" + search + ".*", $option: "i" } },
      ],
    });
    res.json(mahasiswa);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllMahasiswa, getMahasiswaByKeyword };
