import axios from "@/data/api/axios";

export const getProducts = async (
  page = 1,
  limit = 10,
  sort = 'createdAt',
  filter = {},
  search = ''
) => {
  const { data } = await axios.get('/products', {
    params: {
      page,
      limit,
      sort,
      filter: JSON.stringify(filter), // obyektni JSON stringga aylantirib yuborish
      search,
    },
  });
  return data;
};

export const getProductById = async (id) => {
    const { data } = await axios.get(`/products/${id}`);
    return data;
};  