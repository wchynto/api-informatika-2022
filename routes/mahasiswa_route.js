const express = require("express");

const {
  getAllMahasiswa,
  getMahasiswaByKeyword,
} = require("../controllers/mahasiswa_controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message:
      "Selamat datang persaudaraan teknik informatika Universitas Trunojoyo Madura angkatan 2022",
    created_by: "wchynto.dev",
  });
});
router.get("/mahasiswa", getAllMahasiswa);
router.get("/mahasiswa/search/:keyword", getMahasiswaByKeyword);

module.exports = router;
