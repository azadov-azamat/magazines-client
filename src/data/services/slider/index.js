import axios from "@/data/api/axios";

export const getSlider = async () => {
    const { data } = await axios.get('/sliders');
    return data;
};