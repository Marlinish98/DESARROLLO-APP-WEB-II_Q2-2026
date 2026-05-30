const express = require('express');
const EmpleadoModel = require('./Modelos/Empleado');
const ProductModel = require('./Modelos/Product');
const sequelize = require('./db/conection');

const app = express();
const PORT = 5000;

app.use(express.json());

// Promedio por categoría
app.get('/average-category', async (req, res) => {
    try {
        const result = await ProductModel.findAll({
            attributes: [
                'categoryCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'promedioCategoria']
            ],
            group: ['categoryCode']
        });

        res.status(200).json({
            message: 'Promedio de productos por categoría',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el promedio por categoría',
            error: error.message
        });
    }
});


// MAX y MIN por tipo de producto
app.get('/max-min-product-type', async (req, res) => {
    try {
        const result = await ProductModel.findAll({
            attributes: [
                'productType',
                [sequelize.fn('MAX', sequelize.col('value')), 'valor_maximo'],
                [sequelize.fn('MIN', sequelize.col('value')), 'valor_minimo']
            ],
            group: ['productType']
        });

        res.status(200).json({
            message: 'Valor máximo y mínimo por tipo de producto',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los valores',
            error: error.message
        });
    }
});


// SUM por tipo de producto
app.get('/total-product-type', async (req, res) => {
    try {
        const result = await ProductModel.findAll({
            attributes: [
                'productType',
                [sequelize.fn('SUM', sequelize.col('value')), 'total_valor']
            ],
            group: ['productType']
        });

        res.status(200).json({
            message: 'Valor total por tipo de producto',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el valor total por tipo de producto',
            error: error.message
        });
    }
});


// COUNT por moneda
app.get('/count-currency', async (req, res) => {
    try {
        const result = await ProductModel.findAll({
            attributes: [
                'valueCurrency',
                [sequelize.fn('COUNT', sequelize.col('*')), 'tipoMoneda']
            ],
            group: ['valueCurrency']
        });

        res.status(200).json({
            message: 'Cantidad de productos por tipo de moneda',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener la cantidad por tipo de moneda',
            error: error.message
        });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});