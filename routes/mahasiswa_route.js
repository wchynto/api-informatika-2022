const express = require("express");

const {
  getAllMahasiswa,
  getMahasiswaByKeyword
} = require("../controllers/mahasiswa_controller");

const router = express.Router();

router.get("/mahasiswa", getAllMahasiswa);
router.get("/mahasiswa/search/:keyword", getMahasiswaByKeyword);

module.exports = router;
