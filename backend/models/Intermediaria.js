const { DataTypes } = require('sequelize');
const db = require("../config/db.js");

const Intermediaria = db.define(
    'intermediaria',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        professores: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "professores",
                key: "id",
            },
        },
        alunos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "alunos",
                key: "id",
            },
        },
        editais: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Editais",
                key: "id",
            },
        },
    },
    {
        tableName: "intermediaria",
        timestamps: false,
    }
);

module.exports = Intermediaria;
