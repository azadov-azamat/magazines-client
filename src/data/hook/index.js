import { useMutation, useQuery } from '@tanstack/react-query';
import { getSlider } from '../services/slider';
import { getCategories } from '../services/categories';
import { getProducts, getProductById } from '../services/products';
import { createOrder } from '../services/orders';

export const useSlider = () => {
  return useQuery({
    queryKey: ['sliders'],
    queryFn: getSlider,
    staleTime: 1000 * 60 * 5, // 5 minut
  });
};

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5, // 5 minut
    });
};

export const useProducts = (page = 1, limit = 10, sort = 'createdAt', filter, search = '') => {
    return useQuery({
        queryKey: ['products', page, limit, sort, filter, search],
        queryFn: () => getProducts(page, limit, sort, filter, search),
        staleTime: 1000 * 60 * 5, // 5 minut
    });
};  

export const useProductById = (id) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById(id),
    });
};  

export const useCreateOrder = () => {
    return useMutation({
      mutationFn: createOrder,
    });
};