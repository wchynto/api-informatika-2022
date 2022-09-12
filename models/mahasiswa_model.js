const Sequelize = require("sequelize").Sequelize;

const db = require('../confiig/database')

const { DataTypes } = Sequelize;

const Mahasiswa = db.define(
  "mahasiswa",
  {
    nama: {
      type: DataTypes.STRING,
    },
    nim: {
      type: DataTypes.INTEGER,
    },
    tempat_lahir: {
      type: DataTypes.STRING,
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
    },
    alamat: {
      type: DataTypes.STRING,
    },
    no_telpon: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Mahasiswa;
