const { DataTypes } = require('sequelize');
const sequelize = require('../db/conection');

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.FLOAT,
    },
    valueCurrency: {
        type: DataTypes.STRING,
    },
    productType: {
        type: DataTypes.STRING,
    },
    categoryCode: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.INTEGER,
    },
    brandCode: {
        type: DataTypes.STRING,
    },
    partNumber: {
        type: DataTypes.STRING,
    },
    lineCode: {
        type: DataTypes.STRING,
    },
    plannerCode: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'product',
    timestamps: false
});

module.exports = Product;