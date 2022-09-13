const express = require("express");

const {
  getAllMahasiswa,
  getMahasiswaByNim,
  getMahasiswaByName,
  getMahasiswaByKeyword,
} = require("../controllers/mahasiswa_controller");

const router = express.Router();

router.get("/mahasiswa", getAllMahasiswa);
router.get("/mahasiswa/nim/:nim", getMahasiswaByNim);
router.get("/mahasiswa/nama/:nama", getMahasiswaByName);
router.get("/mahasiswa/search/:keyword", getMahasiswaByKeyword);

module.exports = router;
