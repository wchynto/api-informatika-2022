const express = require("express");

const {
  getAllMahasiswa,
  getMahasiswaByNimAsc,
  getMahasiswaByNameAsc,
  getMahasiswaByKeyword,
} = require("../controllers/mahasiswa_controller");

const router = express.Router();

router.get("/mahasiswa", getAllMahasiswa);
router.get("/mahasiswa/nim", getMahasiswaByNimAsc);
router.get("/mahasiswa/nama", getMahasiswaByNameAsc);
router.get("/mahasiswa/search/:keyword", getMahasiswaByKeyword);

module.exports = router;
