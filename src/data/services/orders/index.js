import axios from "@/data/api/axios";

export const createOrder = async (orderData) => {
  const response = await axios.post('/orders', orderData);
  return response.data;
};
