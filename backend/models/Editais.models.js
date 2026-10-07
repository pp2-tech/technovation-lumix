const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Editais = db.define(
    'Editais',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        carga_minima: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: "Editais",
        timestamps: false
    }
);

module.exports = Editais;