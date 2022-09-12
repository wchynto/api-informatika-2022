const express = require("express");

const { getAllMahasiswa, getMahasiswaByNim, getMahasiswaByName } = require("../controllers/mahasiswa_controller");

const router = express.Router();

router.get("/mahasiswa", getAllMahasiswa);
router.get("/mahasiswa/:nim", getMahasiswaByNim);
router.get("/mahasiswa/:nama", getMahasiswaByName);

module.exports = router;
