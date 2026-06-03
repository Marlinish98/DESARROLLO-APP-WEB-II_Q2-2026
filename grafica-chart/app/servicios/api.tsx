import axios from "axios";

const API_URL = 'http://localhost:5000';

export const promedioCategoria = async () => {
    const response = await axios.get(`${API_URL}/average-category`);
    return response.data;
}

export const maxMinProductos = async () => {
    const response = await axios.get(`${API_URL}/max-min-product-type`);
    return response.data;
}

export const sumaTipoProducto = async () => {
    const response = await axios.get(`${API_URL}/total-product-type`);
    return response.data;
}
