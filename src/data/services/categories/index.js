import axios from "@/data/api/axios";

export const getCategories = async () => {
    const { data } = await axios.get('/categories');
    return data;
};