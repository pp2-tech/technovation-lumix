const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Tempo = db.define(
    "tempo",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        id_inter: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "intermediaria",
                key: "id",
            },
        },
        prof: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "intermediaria",
                key: "professores",
            },
        },
        edit: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "intermediaria",
                key: "editais",
            },
        },
        aluno: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "intermediaria",
                key: "alunos",
            },
        },
        hora_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        hora_final: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "tempo",
        timestamps: false,
    }
);

module.exports = Tempo;
