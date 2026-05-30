create database grafico;
use grafico;

select * from employees;
select * from product;


-- Contar productos en la tabla
SELECT COUNT(*) AS total_Productos
FROM product;

-- Calcular el valor total de todos los productos
SELECT SUM(value) AS valor_Total
FROM product;

-- Obtener el valor promedio de los productos
SELECT AVG(value) AS promedio_productos
FROM product;

-- Obtener el valor más alto
SELECT MAX(value) AS valor_maximo
FROM product;

-- Obtener el valor más bajo
SELECT MIN(value) AS valor_maximo
FROM product;

-- Contar el número de productos de cada tipo de moneda (valueCurrency)--
SELECT valueCurrency, COUNT(*) AS tipoMoneda
FROM product
GROUP BY valueCurrency;

-- Calcular el valor promedio por tipo de moneda
SELECT valueCurrency, AVG(value) AS promedio
FROM product
GROUP BY valueCurrency;

-- Obtener el valor total de los productos por productType
SELECT productType, SUM(value) AS total_valor
FROM product
GROUP BY productType;

-- Encontrar el valor máximo y mínimo por productType
SELECT productType,
    MAX(value) AS valor_maximo,
    MIN(value) AS valor_minimo
FROM product
GROUP BY productType;

SELECT 
    categoryCode,
    AVG(value) AS promedioCategoria
FROM product
GROUP BY categoryCode;

-- Contar productos disponibles en cada status
SELECT 
    status,
    COUNT(*) AS cantidad
FROM product
GROUP BY status;

-- Calcular el valor total de productos en cada brandCode
SELECT 
    brandCode,
    SUM(value) AS total_valor
FROM product
GROUP BY brandCode;

-- Obtener el número total de códigos únicos de productos
SELECT COUNT(DISTINCT partNumber) AS codigos_unicos
FROM product;

-- Calcular el valor promedio y cantidad de productos por lineCode
SELECT 
    lineCode,
    AVG(value) AS promedio,
    COUNT(*) AS cantidad
FROM product
GROUP BY lineCode;

-- Encontrar el producto con el valor más alto por plannerCode
SELECT *
FROM product p
WHERE value = (
    SELECT MAX(value)
    FROM product
    WHERE plannerCode = p.plannerCode
);

	