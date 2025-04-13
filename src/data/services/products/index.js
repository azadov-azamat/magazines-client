import axios from "@/data/api/axios";

export const getProducts = async (page = 1, limit = 10, sort = 'createdAt', filter, search = '') => {
    const { data } = await axios.get('/products', {
        params: {
            page,
            limit,
            sort,
            filter: JSON.stringify({...filter, storeId: 5}),
            search
        }
    });
    return data;
};

export const getProductById = async (id) => {
    const { data } = await axios.get(`/products/${id}`);
    return data;
};  