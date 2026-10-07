const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const cadprof = db.define (
    "professores",
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        matricula: {
            type: DataTypes.STRING,
            allowNull: false,
            uniqueKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tablename: "professores",
        timestamps: false,
    }
);

module.exports = cadprof;